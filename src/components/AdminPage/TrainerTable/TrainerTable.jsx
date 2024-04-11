/** @jsxImportSource @emotion/react */
import * as s from "./style";

function TrainerTable(props) {
    return (
        <table css={s.table}>
            <thead css={s.th}>
                <tr>
                    <th>트레이너 번호</th>
                    <th>트레이너 이름</th>
                    <th>담당회원 수</th>
                    <th>평균평점</th>
                    <th>연차정보조회</th>
                </tr>
            </thead>
            <tbody css={s.tb}>
                <tr>
                    <td>1</td>
                    <td>피카츄</td>
                    <td>3</td>
                    <td>8</td>
                    <td>
                        <button>연차조회</button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default TrainerTable;
