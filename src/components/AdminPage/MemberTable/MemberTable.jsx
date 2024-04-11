/** @jsxImportSource @emotion/react */
import * as s from "./style";
import Select from "react-select";

function MemberTable(props) {
    return (
        <>
            <div css={s.searchBox}>
                <input type="text" css={s.searchInput} placeholder="이름으로 검색" />
                <button css={s.searchButton}>검색</button>
            </div>
            <div css={s.tableBox}>
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
            </div>
        </>
    );
}

export default MemberTable;
