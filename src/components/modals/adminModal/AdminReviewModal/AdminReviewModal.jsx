/** @jsxImportSource @emotion/react */
import { useQuery } from "react-query";
import AdminModalLayout from "../AdminModalLayout/AdminModalLayout";
import * as s from "./style";
import { getUserReviewRequest } from "../../../../apis/api/review";
import { useState } from "react";
import { makeStarByScore } from "../../../../utils/makeStarByScore";
import { dateFormatter } from "../../../../utils/dateFormatter";

function AdminReviewModal({ setIsAdminReviewModalOpen, clickedUserId }) {
    const [userReviews, setUserReviews] = useState([]);
    const [clickedReview, setClickedReview] = useState(null);
    const getUserReviewQuery = useQuery(
        ["getUserReviewQuery"],
        () =>
            getUserReviewRequest({
                userId: clickedUserId,
            }),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            enabled: !!clickedUserId,
            onSuccess: (response) => {
                setUserReviews(() =>
                    response.data.map((review) => {
                        return {
                            id: review.trainerReviewId,
                            trainerName: review.trainerName,
                            score: review.reviewScore,
                            text: review.reviewText,
                            date: dateFormatter(review.createDate),
                        };
                    })
                );
            },
        }
    );

    return (
        <AdminModalLayout setIsAdminReviewModalOpen={setIsAdminReviewModalOpen}>
            <div css={s.container}>
                <div css={s.listBox}>
                    <table css={s.table}>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>날짜</th>
                                <th>확인하기</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userReviews.map((review) => {
                                return (
                                    <tr>
                                        <td>{review.id}</td>
                                        <td>{review.date}</td>
                                        <td>
                                            <button onClick={() => setClickedReview(() => review)}>확인하기</button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <div css={s.reviewDetailBox}>
                    <table css={s.contentTable}>
                        <thead css={s.thead}>
                            <tr>
                                <th>작성일</th>
                                <td>{clickedReview?.date}</td>
                            </tr>
                            <tr>
                                <th>트레이너</th>
                                <td>{clickedReview?.trainerName}</td>
                            </tr>
                            <tr>
                                <th>점수</th>
                                <td>
                                    {makeStarByScore(clickedReview?.score)} ({clickedReview?.score} / 10)
                                </td>
                            </tr>
                        </thead>
                        <tbody css={s.tbody}>
                            <tr>
                                <th colSpan={2}>내용</th>
                            </tr>
                            <tr>
                                <td colSpan={2}>{clickedReview?.text}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminModalLayout>
    );
}

export default AdminReviewModal;
