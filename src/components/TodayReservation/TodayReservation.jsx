/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { useQuery } from "react-query";
import * as s from "./style";
import RoutineModal from "../modals/RoutineModal/RoutineModal";
import { getTodayReservationRequest } from "../../apis/api/reservation";

function TodayReservation({ trainerId }) {
    const [today, setToday] = useState(new Date());
    const [reservations, setReservations] = useState([]);
    const [tomorrowReservation, setTomorrowReservation] = useState([]);

    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const getTodayReservationQuery = useQuery(
        ["getTodayReservationQuery", trainerId],
        () =>
            getTodayReservationRequest({
                trainerId: trainerId,
                today: today
            }),
        {
            enabled: !!trainerId,
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                setReservations(response.data);
            },
            onError: (error) => {
                console.log(error);
            },
        }
    );

    const getTomorrowReservationQuery = useQuery(
        ["getTomorrowReservationQuery", trainerId],
        () =>
            getTodayReservationRequest({
                trainerId: trainerId,
                today: tomorrow,
            }),
        {
            enabled: !!trainerId,
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                setTomorrowReservation(response.data);
            },
            onError: (error) => {
                console.log(error);
            },
        }
    );

    return (
        <div css={s.layout}>
            <div css={s.scheduleDiv}>
                <div css={s.schedule}>오늘 일정</div>
                <div css={s.schedule}>내일 일정</div>
            </div>
            <div css={s.scheduleDiv}>
                <div css={s.todayContainer}>
                    <ul css={s.todayBox}>
                        {reservations.map((reservation, index) => (
                            <li key={index}>
                                <p>이름: {reservation.name}</p>
                                <span>시간: {reservation.timeDuration}</span>
                                <RoutineModal />
                            </li>
                        ))}
                    </ul>
                </div>
                <div css={s.tomorrowContainer}>
                    <ul css={s.tomorrowBox}>
                        {tomorrowReservation.map((reservation, index) => (
                            <li key={index}>
                                <p>이름: {reservation.name}</p>
                                <span>시간: {reservation.timeDuration}</span>
                                <RoutineModal />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TodayReservation;
