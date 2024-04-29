/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { useQuery } from "react-query";
import * as s from "./style";
import MakeRoutineModal from "../modals/MakeRoutineModal/MakeRoutineModal";
import { getTodayReservationRequest } from "../../apis/api/reservation";
import { timeList } from "./time";
import SelectRoutineModal from "../modals/SelectRoutineModal/SelectRoutineModal";

function TodayReservation({ trainerId }) {
    const [today, setToday] = useState(new Date());
    const [todayReservations, setTodayReservations] = useState([]);
    const [tomorrowReservations, setTomorrowReservations] = useState([]);

    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const getTodayReservationQuery = useQuery(
        ["getTodayReservationQuery", trainerId],
        () =>
            getTodayReservationRequest({
                trainerId: trainerId,
                today: today,
            }),
        {
            enabled: !!trainerId,
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                setTodayReservations(response.data);
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
                setTomorrowReservations(response.data);
            },
            onError: (error) => {
                console.log(error);
            },
        }
    );

    return (
        <div css={s.layout}>
            <table css={s.table}>
                <thead css={s.head}>
                    <tr>
                        <th rowSpan={2}>시간</th>
                        <th colSpan={3}>오늘일정</th>
                        <th colSpan={3}>내일일정</th>
                    </tr>
                    <tr>
                        <th>고객이름</th>
                        <th>조회버튼</th>
                        <th>생성버튼</th>
                        <th>고객이름</th>
                        <th>조회버튼</th>
                        <th>생성버튼</th>
                    </tr>
                </thead>
                <tbody css={s.body}>
                    {timeList.map((time) => {
                        const reservationTodayThisTime = todayReservations.filter(
                            (reservation) => reservation.timeId === time.id
                        );
                        const isReservedTimeToday = reservationTodayThisTime.length !== 0;
                        const reservationTommorowThisTime = tomorrowReservations.filter(
                            (reservation) => reservation.timeId === time.id
                        );
                        const isReservedTimeTomorrow = reservationTommorowThisTime.length !== 0;
                        return (
                            <tr key={time.id} css={s.tr(isReservedTimeToday, isReservedTimeTomorrow)}>
                                <td>{time.value}</td>
                                {isReservedTimeToday ? (
                                    // 오늘 시간대가 예약되었을 때
                                    <>
                                        <td>{reservationTodayThisTime[0].name}</td>
                                        <td>
                                            <SelectRoutineModal
                                                reservationId={reservationTodayThisTime[0].reservationId}
                                            />
                                        </td>
                                        <td>
                                            <MakeRoutineModal
                                                reservationId={reservationTodayThisTime[0].reservationId}
                                            />
                                        </td>
                                    </>
                                ) : (
                                    <>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </>
                                )}
                                {isReservedTimeTomorrow ? (
                                    <>
                                        <td>{reservationTommorowThisTime[0].name}</td>
                                        <td>
                                            <SelectRoutineModal
                                                reservationId={reservationTommorowThisTime[0].reservationId}
                                            />
                                        </td>
                                        <td>
                                            <MakeRoutineModal
                                                reservationId={reservationTommorowThisTime[0].reservationId}
                                            />
                                        </td>
                                    </>
                                ) : (
                                    <>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </>
                                )}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default TodayReservation;
