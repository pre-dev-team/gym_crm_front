/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { FaCaretLeft } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";
import logo from "../../../assets/image/test.png";
import { useNavigate } from "react-router-dom";
import usePrincipal from "../../../hooks/usePrincipal";

function RootHeader(props) {
    const navigate = useNavigate();
    const accountId = usePrincipal();
    
    const handleLogoutClick = () => {
        if (accountId === 0) {
            return;
        }

        localStorage.removeItem("accessToken");
        alert("로그아웃 성공");
        window.location.replace("/");
    };

    return (
        <div css={s.layout}>
            <div css={s.buttonBox} onClick={() => navigate(-1)}>
                <FaCaretLeft />
            </div>
            <div css={s.buttonBox}>
                <img src={logo} />
            </div>
            <div css={s.buttonBox}>
                <FiLogOut onClick={handleLogoutClick} />
            </div>
        </div>
    );
}

export default RootHeader;
