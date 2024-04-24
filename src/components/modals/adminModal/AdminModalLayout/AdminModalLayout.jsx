/** @jsxImportSource @emotion/react */
import ReactModal from "react-modal";
import * as s from "./style";
ReactModal.setAppElement("#root");

function AdminModalLayout({ children, isOpen, setIsModalOpen }) {
    const handleCloseClick = (e) => {
        setIsModalOpen(false);
    };

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={() => setIsModalOpen(false)}
            style={{
                content: {
                    position: "fixed",
                    transform: "translate(-50%, -50%)",
                    top: "50%",
                    left: "50%",
                    width: "70%",
                    height: "60%",
                },
            }}
        >
            <div css={s.container}>
                <div css={s.layout}>{children}</div>
                <button onClick={handleCloseClick}>닫기</button>
            </div>
        </ReactModal>
    );
}

export default AdminModalLayout;
