/** @jsxImportSource @emotion/react */
import * as s from "./style";
import AuthPageInput from "../../../components/auth/AuthPageInput/AuthPageinput";
import RightTopButton from "../../../components/auth/RightTopButton/RightTopButton";
import useInput from "../../../hooks/useInput";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { oAuth2SignupRequest } from "../../../apis/api/signup";
import { useMutation } from "react-query";
import InputWithMessagebox from "../../../components/auth/InputWithMessageBox/InputWithMessagebox";

function OAuth2SignupPage() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const [username, userNameChange, usernameMessage, setUsernameValue, setUsernameMessage] = useInput("username");
    const [password, passwordChange, passwordMessage] = useInput("password");
    const [checkPassword, checkPasswordChange] = useInput("checkPassword");
    const [name, nameChange, nameMessage] = useInput("name");
    const [phone, phoneChange, phoneMessage] = useInput("phone");
    const [email, emailChange, emailMessage] = useInput("email");

    const [checkPasswordMessage, setCheckPasswordMessage] = useState(null);

    const oAuth2SignupMutation = useMutation({
        mutationKey: "oAuth2SignupMutation",
        mutationFn: oAuth2SignupRequest,
        onSuccess: (response) => {
            navigate("/auth/user/signin");
        },
        onError: (error) => {
            if (error.response.status === 400) {
                const errorMap = error.response.data;
                const errorEntries = Object.entries(errorMap);
                for (let [k, v] of errorEntries) {
                    if (k === "username") {
                        setUsernameMessage(() => {
                            return {
                                type: "error",
                                text: v,
                            };
                        });
                    }
                }
            } else {
                alert("회원가입 오류");
            }
        },
    });

    useEffect(() => {
        if (!checkPassword || !password) {
            setCheckPasswordMessage(() => null);
            return;
        }

        if (checkPassword === password) {
            setCheckPasswordMessage(() => {
                return {
                    type: "success",
                    text: "",
                };
            });
        } else {
            setCheckPasswordMessage(() => {
                return {
                    type: "error",
                    text: "비밀번호가 일치하지 않습니다.",
                };
            });
        }
    }, [checkPassword, password]);

    const handleSignupSubmit = () => {
        const checkFlags = [
            usernameMessage?.type,
            passwordMessage?.type,
            checkPasswordMessage?.type,
            nameMessage?.type,
            phoneMessage?.type,
            emailMessage?.type,
        ];

        if (checkFlags.includes("error") || checkFlags.includes(undefined) || checkFlags.includes(null)) {
            alert("가입 정보를 다시 확인하세요.");
            return;
        }

        oAuth2SignupMutation.mutate({
            username,
            password,
            name,
            phone,
            email,
            oauth2Name: searchParams.get("name"),
            oauth2ProviderName: searchParams.get("provider"),
        });

        alert("가입이 완료되었습니다.");
    };
    return (
        <>
            <div css={s.header}>
                <h2>회원가입({searchParams.get("provider")})</h2>
                <RightTopButton onClick={handleSignupSubmit}>가입하기</RightTopButton>
            </div>

            <InputWithMessagebox
                type={"text"}
                name={"username"}
                placeholder={"사용자이름"}
                value={username}
                onChange={userNameChange}
                message={usernameMessage}
            />
            <InputWithMessagebox
                type={"password"}
                name={"password"}
                placeholder={"비밀번호"}
                value={password}
                onChange={passwordChange}
                message={passwordMessage}
            />
            <InputWithMessagebox
                type={"password"}
                name={"checkPassword"}
                placeholder={"비밀번호 확인"}
                value={checkPassword}
                onChange={checkPasswordChange}
                message={checkPasswordMessage}
            />
            <InputWithMessagebox
                type={"text"}
                name={"name"}
                placeholder={"성명"}
                value={name}
                onChange={nameChange}
                message={nameMessage}
            />
            <InputWithMessagebox
                type={"text"}
                name={"email"}
                placeholder={"이메일"}
                value={email}
                onChange={emailChange}
                message={emailMessage}
            />
            <InputWithMessagebox
                type={"text"}
                name={"phone"}
                placeholder={"전화번호"}
                value={phone}
                onChange={phoneChange}
                message={phoneMessage}
            />
        </>
    );
}

export default OAuth2SignupPage;
