/** @jsxImportSource @emotion/react */
import { useRef, useState } from "react";
import { getUsersBynameRequest } from "../../../apis/api/admin";
import * as s from "./style";
import { useQuery } from "react-query";

function MemberTable({ setIsAdminReviewModalOpen, setClickedUserId }) {
    const [members, setMembers] = useState([]);
    const [name, setName] = useState("");
    const searchButtonRef = useRef();
    const getUsersByNameQuery = useQuery(
        ["getUsersByNameQuery"],
        () =>
            getUsersBynameRequest({
                name: name,
            }),
        {
            refetchOnWindowFocus: false,
            retry: 0,
            enabled: false,
            onSuccess: (response) => {
                setMembers(() => response.data);
            },
        }
    );

    const handleKeydown = (e) => {
        if (e.key === "Enter") {
            searchButtonRef.current.click();
        }
    };

    const handleReviewClick = (id) => {
        setIsAdminReviewModalOpen(() => true);
        setClickedUserId(() => id);
    };
    return (
        <>
            <div css={s.searchBox}>
                <input
                    type="text"
                    css={s.searchInput}
                    placeholder="이름으로 검색"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onKeyDown={(e) => handleKeydown(e)}
                />
                <button css={s.searchButton} onClick={() => getUsersByNameQuery.refetch()} ref={searchButtonRef}>
                    검색
                </button>
            </div>
            <div css={s.tableBox}>
                <table css={s.table}>
                    <thead css={s.th}>
                        <tr>
                            <th>회원번호</th>
                            <th>회원이름</th>
                            <th>예약횟수</th>
                            <th>작성리뷰 조회</th>
                        </tr>
                    </thead>
                    <tbody css={s.tb}>
                        {members.length === 0 ? (
                            <tr>
                                <td colSpan={4}>검색결과가 없습니다</td>
                            </tr>
                        ) : (
                            members.map((member) => {
                                return (
                                    <tr key={member.userId}>
                                        <td>{member.userId}</td>
                                        <td>{member.name}</td>
                                        <td>{member.reservationCount}</td>
                                        <td>
                                            <button onClick={() => handleReviewClick(member.userId)}>
                                                작성리뷰 조회
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default MemberTable;
