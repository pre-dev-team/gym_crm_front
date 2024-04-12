/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import * as s from './style';
import { useQuery, useQueryClient } from "react-query";
import { getTodayReservationRequest } from '../../apis/api/reservation';
import RoutineModal from '../modals/RoutineModal/RoutineModal';

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
            console.log(response.data);
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
            <div css={s.todayContainer}>
            <ul css={s.todayBox}>
                <div>오늘 일정</div>
                {reservations.map((reservation, index) => (
                    <li key={index}>
                        <p>User ID: {reservation.name}</p>
                        <p>Time: {reservation.timeDuration}</p>
                        <RoutineModal />
                    </li>
                ))}
            </ul>
            </div>
            <div css={s.tomorrowContainer}>
            <ul css={s.tomorrowBox}>
                <div>내일 일정</div>
                {tomorrowReservation.map((reservation, index) => (
                    <li key={index}>
                        <p>User ID: {reservation.name}</p>
                        <p>Time: {reservation.timeDuration}</p>
                        <RoutineModal />
                    </li>
                ))}
            </ul>
            </div>
        </div>
    );
}

export default TodayReservation;