/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { IoIosArrowBack } from "react-icons/io";

function AdminRootLayout({ children }) {
    const handlelogoutClick = () => {
        if (window.confirm("로그아웃?")) {
            localStorage.clear("accessToken");
            window.location.reload();
        }
    };

    return (
        <>
            <div css={s.background}></div>
            <div css={s.layout}>
                <div css={s.header}>
                    <div css={s.logoutBox} onClick={handlelogoutClick}>
                        <IoIosArrowBack />
                        <span>로그아웃</span>
                    </div>
                </div>
                <div css={s.container}>{children}</div>
            </div>
        </>
    );
}

export default AdminRootLayout;
