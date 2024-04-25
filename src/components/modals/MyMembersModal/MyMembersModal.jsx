/** @jsxImportSource @emotion/react */
import { useRef, useState } from "react";
import * as s from "./style";

function MyMembersModal(props) {
    const [modalOpen, setModalOpen] = useState(false);
    const modalBackground = useRef();

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
                        <div css={s.layout}>
                            <table css={s.table}>
                                <thead css={s.head}>
                                    <tr css={s.tr}>
                                        <th>번호</th>
                                        <th>이름</th>
                                        <th>예약 조회</th>
                                        <th>인바디 조회</th>
                                    </tr>
                                </thead>
                                <tbody css={s.body}>

                                </tbody>
                            </table>

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

                                </tbody>
                            </table>
                        </div>
                        <button css={s.modalCloseBtn} onClick={() => setModalOpen(false)}>
                            창 닫기
                        </button>
                    </div>
                </div>
            }
        </>
    );
}

export default MyMembersModal;