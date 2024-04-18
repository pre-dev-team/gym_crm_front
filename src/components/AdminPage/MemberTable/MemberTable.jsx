/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { getUsersBynameRequest } from "../../../apis/api/admin";
import * as s from "./style";
import { useQuery } from "react-query";

function MemberTable(props) {
    const [members, setMembers] = useState([]);
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
                setMembers(() => response.data);
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
                        {members.map((member) => {
                            return (
                                <tr key={member.userId}>
                                    <td>{member.userId}</td>
                                    <td>{member.name}</td>
                                    <td>{member.reservationCount}</td>
                                    <td>
                                        <button>작성리뷰 조회</button>
                                    </td>
                                    <td>
                                        <button>인바디 조회</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default MemberTable;
