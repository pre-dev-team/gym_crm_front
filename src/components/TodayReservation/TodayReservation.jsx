/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import * as s from './style';
import { useQuery, useQueryClient } from "react-query";
import { getTodayReservationRequest } from '../../apis/api/reservation';

function TodayReservation({ trainerId, today }) {

    const [reservations, setReservations] = useState([]);
    const [tomorrowReservation, setTomorrowReservation] = useState([]);

    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const getTodayReservationQuery = useQuery(["getTodayReservationQuery", trainerId],
        () => getTodayReservationRequest({
            trainerId: trainerId,
            today: today
        }), {
        enabled: !!trainerId,
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: (response) => {
            setReservations(response.data);
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const getTomorrowReservationQuery = useQuery(["getTomorrowReservationQuery", trainerId],
        () => getTodayReservationRequest({
            trainerId: trainerId,
            today: tomorrow
        }), {
        enabled: !!trainerId,
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: (response) => {
            setTomorrowReservation(response.data);
        },
        onError: (error) => {
            console.log(error);
        },
    });

    return (
        <div css={s.layout}>
            <ul css={s.todayBox}>
                <span>오늘 일정</span>
                {reservations.map((reservation, index) => (
                    <li key={index}>
                        <p>Trainer ID: {reservation.name}</p>
                        <p>Time: {reservation.timeDuration}</p>
                    </li>
                ))}
            </ul>
            <ul css={s.tomorrowBox}>
                <span>내일 일정</span>
                {tomorrowReservation.map((reservation, index) => (
                    <li key={index}>
                        <p>Trainer ID: {reservation.name}</p>
                        <p>Time: {reservation.timeDuration}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodayReservation;