/** @jsxImportSource @emotion/react */
import * as s from "./style";

function AdminModalLayout({ children }) {
    // const handleCloseClick = () => {
    //     setIsAdminReviewModalOpen(() => false);
    // };

    return (
        <div css={s.background}>
            <div css={s.container}>
                <div css={s.layout}>{children}</div>
                <button onClick={null}>어짜고</button>
            </div>
        </div>
    );
}

export default AdminModalLayout;
