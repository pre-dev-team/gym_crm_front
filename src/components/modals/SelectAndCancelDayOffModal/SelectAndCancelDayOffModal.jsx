/** @jsxImportSource @emotion/react */
import { useRef, useState } from "react";
import * as s from "./style";

function SelectAndCancelDayOffModal(props) {
    const [modalOpen, setModalOpen] = useState(false);
    const modalBackground = useRef();

    return (
        <>
            <div css={s.btnWrapper}>
                <button css={s.modalOpenBtn} onClick={() => setModalOpen(true)}>
                    연차 조회
                </button>
            </div>
            {
                modalOpen &&
                <div css={s.modalContainer} ref={modalBackground}>
                    <div css={s.modalContent}>
                        <h1>연차 조회</h1>
                        <div css={s.layout}>
                            <table css={s.table}>
                                <thead css={s.head}>
                                    <tr css={s.tr}>
                                        <th>번호</th>
                                        <th>날짜</th>
                                        <th>시간</th>
                                        <th>이름</th>
                                        <th>연차</th>
                                    </tr>
                                </thead>
                                <tbody css={s.body}>
                                    <tr css={s.btr}>
                                        <td>1</td>
                                        <td>2024-04-18</td>
                                        <td>10:00 ~ 18:00</td>
                                        <td>김세진</td>
                                        <td>
                                            <button>연차 취소</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                            <button css={s.modalCloseBtn} onClick={() => setModalOpen(false)}>
                                모달 닫기
                            </button>
                    </div>
                </div>
            }
        </>
    );
}

export default SelectAndCancelDayOffModal;