/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./style";

function ReservationTable({ reservations }) {
    return (
        <div css={s.tableBox}>
            <table css={s.table}>
                <thead css={s.th}>
                    <tr>
                        <th>번호</th>
                        <th>날짜</th>
                        <th>시간</th>
                        <th>회원이름</th>
                        <th>담당트레이너</th>
                        <th>루틴조회</th>
                    </tr>
                </thead>
                <tbody css={s.tb}>
                    {reservations.map((reservation) => {
                        return (
                            <tr>
                                <td>{reservation.reservationId}</td>
                                <td>{reservation.reservationDate}</td>
                                <td>{reservation.timeDuration}</td>
                                <td>{reservation.name}</td>
                                <td>{reservation.trainerName}</td>
                                <td>
                                    <button>루틴조회</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default ReservationTable;
