/** @jsxImportSource @emotion/react */
import * as s from "./style";

function AdminModalLayout(props) {
    const { children, setIsAdminReviewModalOpen } = props;
    const handleCloseClick = () => {
        setIsAdminReviewModalOpen(() => false);
    };

    return (
        <div css={s.background}>
            <div css={s.container}>
                <div css={s.layout}>{children}</div>
                <button onClick={handleCloseClick}>어짜고</button>
            </div>
        </div>
    );
}

export default AdminModalLayout;
