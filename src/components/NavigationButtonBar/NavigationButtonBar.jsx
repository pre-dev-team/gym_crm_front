/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaCalendarDays, FaUser } from "react-icons/fa6";
import { RiLoginBoxFill } from "react-icons/ri";
import { useRecoilState } from "recoil";
import { loginState } from "../../atoms/loginAtom";
import { useQuery, useQueryClient } from "react-query";
import { useEffect, useState } from "react";
import { accountInfoAtom } from "../../atoms/accountInfoAtom";
import { getMyInfoRequest } from "../../apis/api/principal";

function NavigationButtonBar(props) {
    const [isLogin, setLogin] = useRecoilState(loginState);
    const [accountId, setAccountId] = useState(0);
    const [accountInfo, setAccountInfo] = useRecoilState(accountInfoAtom);

    const queryClient = useQueryClient();
    const principalQueryState = queryClient.getQueryState("principalQuery");

    useEffect(() => {
        setLogin(() => principalQueryState.status === "success");
        setAccountId(() => principalQueryState.data?.data.accountId);
    }, [principalQueryState.status]);

    const getMyAccountInfoQuery = useQuery(
        ["getMyAccountInfoQuery", accountId],
        () =>
            getMyInfoRequest({
                accountId: accountId,
            }),
        {
            enabled: !!accountId,
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                setAccountInfo(() => response.data);
            },
            onError: (error) => {
                console.log(error);
            },
        }
    );
    useEffect(() => {}, [accountId]);

    return (
        <div css={s.layout}>
            <Link css={s.buttonBox} to={isLogin ? "/user/reservation" : "/auth/user/signin"}>
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
                <Link css={s.buttonBox} to={"auth/user/signin"}>
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
