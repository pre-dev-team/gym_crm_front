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
            <div css={s.reservationCard}>
                <span>이전예약</span>
                <div css={s.reservationList}>
                    {prevReservations.map((res, index) => {
                        return (
                            <ul key={index}>
                                <li>{res.reservationDate}</li>
                                <li>트레이너: {res.trainerName}</li>
                                <button
                                    disabled={reviewedTrainerIds.includes(res.trainerId)}
                                    onClick={() => handleReviewModalOpenClick(res.trainerId)}
                                >
                                    리뷰남기기
                                </button>
                            </ul>
                        );
                    })}
                </div>
            </div>
            <div css={s.reservationCard}>
                <span>오는예약</span>
                <div css={s.reservationList}>
                    {comingReservations.map((res, index) => {
                        return (
                            <ul key={index}>
                                <li>{res.reservationDate}</li>
                                <li>트레이너: {res.trainerName}</li>
                                <button>루틴보기</button>
                            </ul>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default MypageReservationReview;
