/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaCalendarDays, FaUser } from "react-icons/fa6";
import { RiLoginBoxFill } from "react-icons/ri";
import { useRecoilState } from "recoil";
import { loginState } from "../../atoms/loginAtom";
import { useQuery, useQueryClient } from "react-query";
import { useEffect } from "react";

function NavigationButtonBar(props) {
    const [isLogin, setLogin] = useRecoilState(loginState);

    const queryClient = useQueryClient();
    const principalQueryState = queryClient.getQueryState("principalQuery");

    useEffect(() => {
        setLogin(() => principalQueryState.status === "success");
    }, [principalQueryState.status]);

    return (
        <div css={s.layout}>
            <Link css={s.buttonBox} to={isLogin ? "/user/reservation" : "/user/signin"}>
                <div>
                    <FaCalendarDays />
                </div>
                <span>Reservation</span>
            </Link>
            <Link css={s.buttonBox} to={"/"}>
                <div>
                    <FaHome />
                </div>
                <span>Home</span>
            </Link>
            {isLogin ? (
                <Link css={s.buttonBox} to={"/user/mypage"}>
                    <div>
                        <FaUser />
                    </div>
                    <span>MyPage</span>
                </Link>
            ) : (
                <Link css={s.buttonBox}>
                    <div>
                        <RiLoginBoxFill />
                    </div>
                    <span>Login</span>
                </Link>
            )}
        </div>
    );
}

export default NavigationButtonBar;
