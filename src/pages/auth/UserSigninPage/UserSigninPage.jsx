/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import * as s from "./style";
import { motion } from "framer-motion";
import InputWithMessagebox from "../../../components/auth/InputWithMessageBox/InputWithMessagebox";
import useInput from "../../../hooks/useInput";
import googleImg from "../../../assets/icons/google.png";
import naverImg from "../../../assets/icons/naver.png";
import kakaoImg from "../../../assets/icons/kakao.png";
import { useMutation } from "react-query";
import { SigninRequest } from "../../../apis/api/signin";
import { useRef } from "react";

function UserSigninPage(props) {
    const [username, usernameChange] = useInput();
    const [password, passwordChange] = useInput();
    const clickRef = useRef();
    const userSigninMutation = useMutation({
        mutationKey: "userSigninMutation",
        mutationFn: SigninRequest,
        onSuccess: (response) => {
            const accessToken = response?.data;
            if (!!accessToken) {
                localStorage.setItem("accessToken", accessToken);
                alert("로그인성공");
                window.location.replace("/");
            } else {
                alert("해당 사용자가 없습니다");
            }
        },
        onError: (error) => {
            if (!!error.response.data.error) {
                alert(error.response.data.error);
            } else {
                alert(error.response.data);
            }
        },
    });

    const handleLoginClick = () => {
        if (!username || !password) {
            alert("아이디와 비밀번호를 모두 입력해주세요.");
            return;
        }
        userSigninMutation.mutate({
            username: username,
            password: password,
        });
    };

    return (
        <motion.div
            transition={{ duration: 0.3, delay: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            css={s.layout}
        >
            <h1>로그인</h1>
            <div css={s.loginBox}>
                <div css={s.selectBox}>
                    <div css={s.inputBox}>
                        <InputWithMessagebox
                            type={"text"}
                            name={"username"}
                            value={username}
                            placeholder={"아이디"}
                            onChange={usernameChange}
                        />
                        <InputWithMessagebox
                            type={"password"}
                            name={"password"}
                            value={password}
                            placeholder={"비밀번호"}
                            onChange={passwordChange}
                            ref={clickRef}
                        />
                    </div>
                    <div css={s.buttonBox}>
                        <button onClick={handleLoginClick} ref={clickRef}>
                            로그인
                        </button>
                    </div>
                    <div css={s.searchBox}>
                        <Link to={"/auth/user/search/username"}>아이디찾기</Link>
                        <span css={s.col}></span>
                        <Link to={"/auth/user/search/password"}>비밀번호찾기</Link>
                        <span css={s.col}></span>
                        <Link to={"/auth/user/agreement"}>회원가입</Link>
                    </div>
                    <span css={s.line}>
                        <span>또는</span>
                    </span>
                    <div css={s.oauthBox}>
                        <Link to={"http://3.34.8.7/oauth2/authorization/google"}>
                            <img src={googleImg} alt="구글로그인" />
                        </Link>
                        <Link to={"http://3.34.8.7/oauth2/authorization/naver"}>
                            <img src={naverImg} alt="네이버로그인" />
                        </Link>
                        <Link to={"http://3.34.8.7/oauth2/authorization/kakao"}>
                            <img src={kakaoImg} alt="카카오로그인" />
                        </Link>
                    </div>
                </div>
            </div>
            <div css={s.blank}></div>
        </motion.div>
    );
}

export default UserSigninPage;
