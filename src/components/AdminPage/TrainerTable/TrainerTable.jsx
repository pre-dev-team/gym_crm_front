/** @jsxImportSource @emotion/react */
import * as s from "./style";

function TrainerTable({ setIsAdminHolidayModalOpen }) {
    return (
        <div>
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
                            <button onClick={() => setIsAdminHolidayModalOpen(() => true)}>연차조회</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TrainerTable;
