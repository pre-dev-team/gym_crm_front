/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from "react";
import * as s from "./style";
import { useQuery } from "react-query";
import { selectMymemberInformationRequest } from "../../../apis/api/reservation";
import SelectInbodyModal from "../SelectInbodyModal/SelectInbodyModal";

function MyMembersModal({ accountId, userId }) {
    const [modalOpen, setModalOpen] = useState(false);
    const modalBackground = useRef();
    const [userInformationList, setUserInformationList] = useState([]);

    const userInformationQuery = useQuery(
        ["userInformationQuery", userId],
        () =>
            selectMymemberInformationRequest({
                accountId: accountId,
                userId: userId
            }),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            enabled: !!accountId && !!userId,
            onSuccess: response => {
                setUserInformationList(() => response.data);
            }
        }
    );

    return (
        <>
            <div css={s.btnWrapper}>
                <button css={s.modalOpenBtn} onClick={() => setModalOpen(true)}>
                    회원정보조회
                </button>
            </div>
            {
                modalOpen &&
                <div css={s.modalContainer} ref={modalBackground}>
                    <div css={s.modalContent}>
                        <h1>회원 정보 조회</h1>
                        <button css={s.modalCloseBtn} onClick={() => setModalOpen(false)}>
                            창 닫기
                        </button>
                        <div css={s.layout}>
                            <div css={s.test}>
                                <table css={s.table}>
                                    <thead css={s.head}>
                                        <tr css={s.tr}>
                                            <th>번호</th>
                                            <th>날짜</th>
                                            <th>시간</th>
                                            <th>이름</th>
                                            <th>전화번호</th>
                                            <th>인바디 조회</th>
                                        </tr>
                                    </thead>
                                    <tbody css={s.body}>
                                        {userInformationList.map((information, index) => (
                                            <tr key={information.accountId}>
                                                <td>{index + 1}</td>
                                                <td>{information.reservationDate}</td>
                                                <td>{information.timeDuration}</td>
                                                <td>{information.name}</td>
                                                <td>{information.phone}</td>
                                                <td>
                                                    <button>인바디 조회</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div css={s.test}>
                                <table css={s.table2}>
                                    <h1>조회시 내용표시</h1>

                                    {/* <thead css={s.head}>
                                        <tr css={s.tr}>
                                            <th>번호</th>
                                            <th>날짜</th>
                                            <th>시간</th>
                                            <th>이름</th>
                                            <th>승인</th>
                                            <th>연차</th>
                                        </tr>
                                    </thead> */}
                                    <tbody>
                                        <SelectInbodyModal userId={userId} />
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            }
        </>
    );
}

export default MyMembersModal;