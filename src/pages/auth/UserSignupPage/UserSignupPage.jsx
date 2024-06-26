/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { motion } from "framer-motion";
import InputWithMessagebox from "../../../components/auth/InputWithMessageBox/InputWithMessagebox";
import { useEffect, useRef, useState } from "react";
import useInput from "../../../hooks/useInput";
import { useMutation } from "react-query";
import { oAuth2SignupRequest, userSignupRequest } from "../../../apis/api/signup";
import { agreedState } from "../../../atoms/agreed";
import { useRecoilState } from "recoil";
import { useNavigate, useSearchParams } from "react-router-dom";

function UserSignupPage() {
    const [agreed, setAgreed] = useRecoilState(agreedState);
    const [username, usernameChange, usernameMessage, , setUsernameMessage] = useInput("username");
    const [password, passwordChange, passwordMessage] = useInput("password");
    const [checkPassword, checkPasswordChange] = useInput("checkPassword");
    const [name, nameChange, nameMessage, setName] = useInput("name");
    const [phone, phoneChange, phoneMessage, setPhone] = useInput("phone");
    const [email, emailChange, emailMessage, setEmail] = useInput("email");
    const [checkPasswordMessage, setCheckPasswordMessage] = useState(null);
    const buttonRef = useRef();
    const [searchParams] = useSearchParams();
    const oAuth2Name = searchParams.get("name");
    const provider = searchParams.get("provider");
    const navigator = useNavigate();
    useEffect(() => {
        if (!agreed) {
            alert("약관에 동의해야 회원가입 페이지에 접근할 수 있습니다.");
            if (!!oAuth2Name || !!provider) {
                navigator(`/auth/user/agreement?name=${oAuth2Name}&provider=${provider}`);
            } else {
                navigator("/auth/user/agreement");
            }
        }
        return () => {
            setAgreed(false);
        };
    }, [agreed]);

    useEffect(() => {
        if (!checkPassword || !password) {
            setCheckPasswordMessage(null);
            return;
        }

        if (checkPassword === password) {
            setCheckPasswordMessage({
                type: "success",
                text: "",
            });
        } else {
            setCheckPasswordMessage({
                type: "error",
                text: "비밀번호가 일치하지 않습니다.",
            });
        }
    }, [checkPassword, password]);

    useEffect(() => {
        if (phone.length === 3 || phone.length === 8) {
            setPhone((prevPhone) => prevPhone + "-");
        }
    }, [phone]);

    const userSignupMutation = useMutation({
        mutationKey: "userSignupMutation",
        mutationFn: userSignupRequest,
        onSuccess: (response) => {
            alert("회원가입 성공");
            window.location.replace("/auth/user/signin");
        },
        onError: (error) => {
            if (error.response.status === 400) {
                const errorMap = error.response.data;
                const errorEntries = Object.entries(errorMap);
                for (let [k, v] of errorEntries) {
                    if (k === "username") {
                        setUsernameMessage({
                            type: "error",
                            text: v,
                        });
                    }
                }
            } else {
                alert("회원가입 오류");
            }
        },
    });

    const oAuth2SignupMutation = useMutation({
        mutationKey: "oAuth2SignupMutation",
        mutationFn: oAuth2SignupRequest,
        onSuccess: (response) => {
            navigator("/auth/user/signin");
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

    const handleSubmitClick = () => {
        if (!password) {
            alert("비밀번호를 입력하세요.");
            return;
        }

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

        if (!!oAuth2Name || !!provider) {
            oAuth2SignupMutation.mutate({
                username: username,
                password: password,
                name: name,
                phone: phone,
                email: email,
                oauth2Name: oAuth2Name,
                oauth2ProviderName: provider,
            });
        } else {
            userSignupMutation.mutate({
                username: username,
                password: password,
                name: name,
                phone: phone,
                email: email,
            });
        }
        alert("회원가입이 완료되었습니다.");
        window.location.href = "/";
    };

    return (
        <motion.div
            transition={{ duration: 0.3, delay: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            css={s.layout}
        >
            <div css={s.signupBox}>
                <h1>회원가입</h1>
                <div css={s.inputBox}>
                    <InputWithMessagebox
                        type="text"
                        name="username"
                        value={username}
                        placeholder="아이디"
                        onChange={usernameChange}
                        message={usernameMessage}
                    />
                </div>
                <div css={s.inputBox}>
                    <InputWithMessagebox
                        type="password"
                        name="password"
                        value={password}
                        placeholder="비밀번호"
                        onChange={passwordChange}
                        message={passwordMessage}
                    />
                </div>
                <div css={s.inputBox}>
                    <InputWithMessagebox
                        type="password"
                        name="checkPassword"
                        value={checkPassword}
                        placeholder="비밀번호 확인"
                        onChange={checkPasswordChange}
                        message={checkPasswordMessage}
                    />
                </div>
                <div css={s.inputBox}>
                    <InputWithMessagebox
                        type="text"
                        name="name"
                        value={name}
                        placeholder="이름"
                        onChange={nameChange}
                        message={nameMessage}
                    />
                </div>
                <div css={s.inputBox}>
                    <InputWithMessagebox
                        type="text"
                        name="phone"
                        value={phone}
                        placeholder="휴대전화번호"
                        onChange={phoneChange}
                        message={phoneMessage}
                    />
                </div>
                <div css={s.inputBox}>
                    <InputWithMessagebox
                        type="email"
                        name="email"
                        value={email}
                        placeholder="이메일"
                        onChange={emailChange}
                        message={emailMessage}
                        ref={buttonRef}
                    />
                </div>
                <div css={s.buttonBox}>
                    <button onClick={handleSubmitClick} ref={buttonRef}>
                        가입
                    </button>
                </div>
            </div>
        </motion.div>
    );
}

export default UserSignupPage;
