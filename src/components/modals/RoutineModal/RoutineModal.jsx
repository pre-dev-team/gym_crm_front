/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useState } from "react";
import Modal from 'react-modal';

Modal.setAppElement('#root');

function RoutineModal(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
      
        const openModal = () => {
          setModalIsOpen(true);
        };
      
        const closeModal = () => {
          setModalIsOpen(false);
        };
      
    return (
        <div>
        <button onClick={openModal}>루틴 짜주기</button>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
          <h2>루틴</h2>
          <ul css={s.routine}>
            <li>가슴</li>
            <li>벤치 5set</li>
          </ul>
          <button onClick={closeModal}>닫기</button>
        </Modal>
      </div>
    );
}

export default RoutineModal;