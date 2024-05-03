/** @jsxImportSource @emotion/react */
import { useQueryClient } from "react-query";
import * as s from "./style";
import { IoIosArrowBack } from "react-icons/io";
import { requestForFCMToken } from "../../../apis/api/firebase/firebaseConfig";
import { useEffect } from "react";

function AdminRootLayout({ children }) {
    const queryClient = useQueryClient();
    const principalQueryState = queryClient.getQueryState("principalQuery");

    useEffect(() => {
        if (principalQueryState.status === "success") {
            requestForFCMToken();
        }
    }, [principalQueryState.status]);

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
