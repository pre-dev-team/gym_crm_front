/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { getUserAllReservationRequest } from "../../apis/api/reservation";
import * as s from "./style";
import { useQuery, useQueryClient } from "react-query";
import { dateFormatter } from "../../utils/dateFormatter";

function MypageReservationReview({ accountId }) {
    const [allUserReservations, setAllUserReservations] = useState([]);
    const [prevReservations, setPrevReservations] = useState([]);
    const [comingReservations, setComingReservations] = useState([]);

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

    return (
        <div css={s.reservationBoard}>
            <div css={s.reservationCard}>
                <span>이전예약</span>
                <div css={s.reservationList}>
                    {prevReservations.map((res, index) => {
                        return (
                            <ul key={index}>
                                <li>{res.reservationDate}</li>
                                <li>트레이너: {res.trainerName}</li>
                                <button>리뷰남기기</button>
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
