/** @jsxImportSource @emotion/react */
import { getUsersBynameRequest } from "../../../apis/api/admin";
import * as s from "./style";
import { useQuery } from "react-query";

function MemberTable({ setIsAdminReviewModalOpen }) {
    const getUsersByNameQuery = useQuery(
        ["getUsersByNameQuery"],
        () =>
            getUsersBynameRequest({
                name: "",
            }),
        {
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: (response) => {
                console.log(response.data);
            },
        }
    );

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
                            <th>회원번호</th>
                            <th>회원이름</th>
                            <th>예약횟수</th>
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
                                <button onClick={setIsAdminReviewModalOpen(() => true)}>인바디 조회</button>
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
