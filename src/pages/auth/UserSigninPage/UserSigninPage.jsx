/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import * as s from './style';
import InputWithMessagebox from '../../../components/InputWithMessageBox/InputWithMessagebox';
import useInput from '../../../hooks/useInput';
import googleImg from '../../../assets/icons/google.png'
import naverImg from '../../../assets/icons/naver.png'
import kakaoImg from '../../../assets/icons/kakao.png'
import { useMutation } from 'react-query';
import { userSigninRequest } from '../../../apis/api/signin';
import { useState } from 'react';

function UserSigninPage(props) {
    const [username, usernameChange, usernameMessage, setUsername] = useInput();
    const [password, passwordChange, passwordMessage, setPassword] = useInput();


    const userSigninMutation = useMutation({
        mutationKey: "userSigninMutation",
        mutationFn: userSigninRequest,
        onSuccess: response => {
            const accessToken = response?.data;
            localStorage.setItem("accessToken", accessToken);
            alert("로그인성공")
            window.location.replace("/");
        },
        onError: error => {
            console.log(error);
        }
    })
    
    const handleLoginClick = () => {
        console.log({
            username: username,
            password: password
        });

        userSigninMutation.mutate({
            userUsername: username,
            userPassword: password
        })
    }

    return (
        <div css={s.layout}>
            <h1>로그인</h1>
            <div css={s.loginBox}>
                <div css={s.linkBox}>
                    <Link to={'/auth/user/signin'}>👪유저로그인</Link>
                    <Link to={'/auth/admin/signin'}>🔐관리자로그인</Link>
                </div>
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
                        />
                    </div>
                    <div css={s.buttonBox}>
                        <button onClick={handleLoginClick}>로그인</button>
                    </div>
                    <div css={s.searchBox}>
                        <Link>🔒아이디찾기</Link>
                        <Link>🔑비밀번호찾기</Link>
                    </div>
                    <span css={s.line}>
                        <span>또는</span>
                    </span>
                    <div css={s.oauthBox}>
                        <Link>
                            <img src={googleImg} alt="구글로그인" />
                        </Link>
                        <Link>
                            <img src={naverImg} alt="네이버로그인" />
                        </Link>
                        <Link>
                            <img src={kakaoImg} alt="카카오로그인" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserSigninPage;