/** @jsxImportSource @emotion/react */
import * as s from "./style";

function AdminModalLayout(props) {
    const { children, setIsAdminReviewModalOpen, setIsAdminHolidayModalOpen } = props;

    const handleCloseClick = (e) => {
        try {
            setIsAdminReviewModalOpen(false);
        } catch (error) {
            setIsAdminHolidayModalOpen(false);
        }
    };

    return (
        <div css={s.background}>
            <div css={s.container}>
                <div css={s.layout}>{children}</div>
                <button onClick={handleCloseClick}>닫기</button>
            </div>
        </div>
    );
}

export default AdminModalLayout;
