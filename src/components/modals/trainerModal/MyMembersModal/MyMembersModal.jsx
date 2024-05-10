/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from "react";
import * as s from "./style";
import { useQuery } from "react-query";
import { selectMymemberInformationRequest } from "../../../../apis/api/reservation";
import SelectInbodyModal from "../SelectInbodyModal/SelectInbodyModal";
import { getInbodyInformationRequest } from "../../../../apis/api/inbody";

function MyMembersModal({ accountId, userId }) {
    const [modalOpen, setModalOpen] = useState(false);
    const modalBackground = useRef();
    const [userInformationList, setUserInformationList] = useState([]);
    const [inbodyInformation, setInbodyInformation] = useState([]);
    
    useEffect(() => {
        const escKeyDown = (e) => {
            if (e.key === "Escape") {
                setModalOpen(() => false);
            }
        };
        window.addEventListener("keydown", escKeyDown);

        return () => window.removeEventListener("keydown", escKeyDown);
    }, [modalOpen]);

    const userInformationQuery = useQuery(
        ["userInformationQuery", userId],
        () =>
            selectMymemberInformationRequest({
                accountId: accountId,
                userId: userId,
            }),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            enabled: false,
            onSuccess: (response) => {
                setUserInformationList(() => response.data);
            },
        }
    );

    const userInbodyQuery = useQuery(
        ["userInbodyQuery", userId],
        () =>
            getInbodyInformationRequest({
                userId: userId,
            }),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            enabled: !!userId,
            onSuccess: (response) => {
                setInbodyInformation(response.data);
            },
        }
    );

    const handleModalOpenClick = () => {
        setModalOpen(() => true);
        userInformationQuery.refetch();
    };

    return (
        <>
            <div css={s.btnWrapper}>
                <button css={s.modalOpenBtn} onClick={handleModalOpenClick}>
                    회원정보조회
                </button>
            </div>
            {modalOpen && (
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
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div css={s.test2}>
                                <table css={s.table2}>
                                    <tbody>
                                        {inbodyInformation.length === 0 ? (
                                            <h1 css={s.h1}>등록된 인바디가 없습니다.</h1>
                                        ) : (
                                            <SelectInbodyModal inbodyInformation={inbodyInformation} />
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default MyMembersModal;
