/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { getUserAllReservationRequest } from "../../apis/api/reservation";
import * as s from "./style";
import { useQuery, useQueryClient } from "react-query";
import { dateFormatter } from "../../utils/dateFormatter";
import MakeReviewModal from "../modals/MakeReviewModal/MakeReviewModal";
import { getUserReviewRequest } from "../../apis/api/review";

function MypageReservationReview({ accountId }) {
    const [allUserReservations, setAllUserReservations] = useState([]);
    const [prevReservations, setPrevReservations] = useState([]);
    const [comingReservations, setComingReservations] = useState([]);
    const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
    const [clickedTrinerId, setClickedTrainerId] = useState(0);
    const [reviewedTrainerIds, setReviewedTrainerIds] = useState([]);

    useEffect(() => {
        console.log(allUserReservations);
        const today = dateFormatter(new Date());
        setPrevReservations(() => allUserReservations.filter((res) => res.reservationDate < today));
        setComingReservations(() => allUserReservations.filter((res) => res.reservationDate >= today));
    }, [allUserReservations]);

    const getUserAllReservationQuery = useQuery(
        ["getUserAllReservationRequest"],
        () =>
            getUserAllReservationRequest({
                accountId: accountId,
            }),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                setAllUserReservations(() =>
                    response.data.map((res) => {
                        return {
                            reservationDate: res.reservationDate,
                            trainerId: res.trainerId,
                            trainerName: res.name,
                        };
                    })
                );
            },
            enabled: !!accountId,
        }
    );

    const getUserReviewsQuery = useQuery(
        ["getUserReviewsQuery"],
        () =>
            getUserReviewRequest({
                accountId: accountId,
            }),
        {
            enabled: !!accountId,
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                setReviewedTrainerIds(() => response.data.map((res) => res.trainerId));
            },
        }
    );

    const handleReviewModalOpenClick = (trainerId) => {
        setIsReviewModalOpen(() => true);
        setClickedTrainerId(() => trainerId);
    };

    return (
        <div css={s.reservationBoard}>
            {isReviewModalOpen ? (
                <MakeReviewModal
                    accountId={accountId}
                    trainerId={clickedTrinerId}
                    setIsReviewModalOpen={setIsReviewModalOpen}
                    isReviewModalOpen={isReviewModalOpen}
                />
            ) : (
                <></>
            )}
            <div css={s.tableBox}>
                <h2>예약확인</h2>
                <table css={s.table}>
                    <thead>
                        <tr>
                            <th>날짜</th>
                            <th>트레이너</th>
                            <th>기타</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comingReservations.map((reservation) => {
                            return (
                                <tr key={reservation.reservationId}>
                                    <td>{reservation.reservationDate}</td>
                                    <td>{reservation.trainerName}</td>
                                    <td>
                                        <button>루틴확인하기</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                    <tbody>
                        {prevReservations
                            .sort((a, b) => a.reservationDate - b.reservationDate)
                            .reverse()
                            .map((reservation) => {
                                return (
                                    <tr key={reservation.reservationId}>
                                        <td>{reservation.reservationDate}</td>
                                        <td>{reservation.trainerName}</td>
                                        <td>
                                            <button
                                                onClick={() => handleReviewModalOpenClick(reservation.trainerId)}
                                                disabled={reviewedTrainerIds.includes(reservation.trainerId)}
                                            >
                                                리뷰작성하기
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MypageReservationReview;
