/** @jsxImportSource @emotion/react */
import * as s from "./style";

function MemberTable(props) {
    return (
        <table css={s.table}>
            <thead css={s.th}>
                <tr>
                    <th>회원 번호</th>
                    <th>회원 이름</th>
                    <th>예약 횟수</th>
                    <th>작성리뷰 조회</th>
                    <th>인바디 조회</th>
                </tr>
            </thead>
            <tbody css={s.tb}>
                <tr>
                    <td>1</td>
                    <td>박화목</td>
                    <td>3</td>
                    <td>
                        <button>작성리뷰 조회</button>
                    </td>
                    <td>
                        <button>인바디 조회</button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default MemberTable;
