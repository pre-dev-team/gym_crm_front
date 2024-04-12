/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useRef, useState } from "react";
import { FaRightLong } from "react-icons/fa6";

function RoutineModal(props) {
  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef();

  return (
    <>
      <div css={s.btnWrapper}>
        <button css={s.modalOpenBtn} onClick={() => setModalOpen(true)}>
          모달 열기
        </button>
      </div>
      {
        modalOpen &&
        <div css={s.modalContainer} ref={modalBackground}>
          <div css={s.modalContent}>
            <h1>ROUTINE</h1>
            <div css={s.routineLayout}>
              <div css={s.routine}>
                <ul css={s.routineBox}>
                  <li>가슴</li>
                </ul>
              </div>
              <FaRightLong  css={s.right}/>
              <div css={s.routine}>
                <ul css={s.routineBox}>
                  <li>벤치프레스</li>
                </ul>
              </div>
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

export default RoutineModal;