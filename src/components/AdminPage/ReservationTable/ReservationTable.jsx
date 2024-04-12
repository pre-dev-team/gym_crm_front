/** @jsxImportSource @emotion/react */
import * as s from "./style";

function ReservationTable(props) {
    return (
        <>
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
                    <tr>
                        <td>1</td>
                        <td>2024-04-11</td>
                        <td>11:00 ~ 12:00</td>
                        <td>박화목</td>
                        <td>피카츄</td>
                        <td>
                            <button>루틴조회</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default ReservationTable;
