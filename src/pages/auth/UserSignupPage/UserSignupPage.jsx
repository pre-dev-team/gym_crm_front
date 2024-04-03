/** @jsxImportSource @emotion/react */
import * as s from './style';
import { Link } from 'react-router-dom';
import InputWithMessagebox from '../../../components/InputWithMessageBox/InputWithMessagebox';
import { useState } from 'react';
import useInput from '../../../hooks/useInput';
import { useMutation } from 'react-query';
import {userSignupRequest} from '../../../apis/api/signup';


function UserSignupPage(props) {
    const [username, usernameChange, usernameMessage, setUsername] = useInput();
    const [password, passwordChange, passwordMessage, setPassword] = useInput();
    const [checkPassword, checkPasswordChange, checkPasswordMessage, setCheckPassword] = useInput();
    const [name, nameChange, nameMessage, setName] = useInput();
    const [email, emailChange, emailMessage, setEmail] = useInput();
    const [phone, phoneChange, phoneMessage, setPhone] = useInput();

    const userSignupMutation = useMutation({
        mutationKey: "userSignupMutation",
        mutationFn: userSignupRequest,
        onSuccess: response => {
            console.log(response);
        },
        onError: error => {
            console.log(error);
        }
    })

    const handleSubmitClick = () => {
        userSignupMutation.mutate({
            userUsername: username,
            userPassword: password,
            userName:name,
            userPhone:phone,
            userEmail:email
        });
    }
    

    return (

        <div css={s.layout}>
            <h1>회원가입</h1>
            <div css={s.inputBox}>
                <div css={s.inputBox}>
                    <InputWithMessagebox 
                        type={"text"}
                        name={"username"}
                        value={username}
                        placeholder={"아이디"}
                        onChange={usernameChange}
                    />
                </div>
                <div css={s.inputBox}>
                    <InputWithMessagebox 
                        type={"password"}
                        name={"password"}
                        value={password}
                        placeholder={"비밀번호"}
                        onChange={passwordChange}
                    />
                </div>
                <div css={s.inputBox}>
                    <InputWithMessagebox 
                        type={"password"}
                        name={"checkPassword"}
                        value={checkPassword}
                        placeholder={"비밀번호확인"}
                        onChange={checkPasswordChange}
                    />
                </div>
                <div css={s.inputBox}>
                    <InputWithMessagebox 
                        type={"text"}
                        name={"name"}
                        value={name}
                        placeholder={"이름"}
                        onChange={nameChange}
                    />
                </div>
                <div css={s.inputBox}>
                    <InputWithMessagebox 
                        type={"email"}
                        name={"email"}
                        value={email}
                        placeholder={"이메일"}
                        onChange={emailChange}
                    />
                </div>
                <div css={s.inputBox}>
                    <InputWithMessagebox 
                        type={"text"}
                        name={"phone"}
                        value={phone}
                        placeholder={"휴대전화번호"}
                        onChange={phoneChange}
                    />
                </div>
                <div css={s.buttonBox}>
                    <button onClick={handleSubmitClick}>제출</button>
                </div>
            </div>
        </div>
    );
}

export default UserSignupPage;