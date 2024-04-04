
import * as s from './style';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import InputWithMessagebox from '../../../components/InputWithMessageBox/InputWithMessagebox';
import { useEffect, useState } from 'react';
import useInput from '../../../hooks/useInput';
import { useMutation } from 'react-query';
import {userSignupRequest} from '../../../apis/api/signup';


function UserSignupPage(props) {
    const [username, usernameChange, usernameMessage, setUsername, setUsernameMessage] = useInput("userUsername");
    const [password, passwordChange, passwordMessage, setPassword] = useInput("userPassword");
    const [checkPassword, checkPasswordChange] = useInput("checkPassword");
    const [name, nameChange, nameMessage, setName] = useInput("userName");
    const [email, emailChange, emailMessage, setEmail] = useInput("userPhone");
    const [phone, phoneChange, phoneMessage, setPhone] = useInput("userEmail");
    const [checkPasswordMessage, setCheckPasswordMessage] = useState(null);

    useEffect(() => {
        if(!checkPassword || !password) {
            setCheckPasswordMessage(() => null);
            return;
        }

        if(checkPassword === password) {
            setCheckPasswordMessage(() => {
                return {
                    type: "success",
                    text: ""
                }
            })
        } else {
            setCheckPasswordMessage(() => {
                return {
                    type: "error",
                    text: "비밀번호가 일치하지 않습니다."
                }
            })
        }
    }, [checkPassword, password]);

    const userSignupMutation = useMutation({
        mutationKey: "userSignupMutation",
        mutationFn: userSignupRequest,
        onSuccess: (response) => {
            console.log(response);
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const handleSubmitClick = () => {
        userSignupMutation.mutate({
            userUsername: username,
            userPassword: password,
            userName: name,
            userPhone: phone,
            userEmail: email,
        });

    };

    return (
       
            <div css={s.signupBox}>
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
                        <button onClick={handleSubmitClick}>가입</button>
                    </div>


        const checkFlags = [
            usernameMessage?.type,
            passwordMessage?.type,
            checkPasswordMessage?.type,
            nameMessage?.type,
            phoneMessage?.type,
            emailMessage?.type
        ];

        if(checkFlags.includes("error") || checkFlags.includes(undefined) || checkFlags.includes(null)) {
            alert("가입 정보를 다시 확인하세요.");
            return;
        }

        userSignupRequest({
            username,
            password,
            name,
            phone,
            email
        }).then(response => {
            console.log(response);
        }).catch(error => {
            if(error.response.status === 400) {
                const errorMap = error.response.data;
                const errorEntries = Object.entries(errorMap);
                for(let [ k, v ] of errorEntries) {
                    if(k === "username") {
                        setUsernameMessage(() => {
                            return {
                                type: "error",
                                text: v
                            }
                        })
                    }
                }
            } else {
                alert("회원가입 오류");
            }
        });
    }

    return (

         <motion.div
            transition={{ duration: 0.3, delay: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            css={s.layout}
        >
            <h1>회원가입</h1>
            <div css={s.inputBox}>
                <div css={s.inputBox}>
                    <InputWithMessagebox 
                        type={"text"}
                        name={"username"}
                        value={username}
                        placeholder={"아이디"}
                        onChange={usernameChange}
                        message={usernameMessage}
                    />
                </div>
                <div css={s.inputBox}>
                    <InputWithMessagebox 
                        type={"password"}
                        name={"password"}
                        value={password}
                        placeholder={"비밀번호"}
                        onChange={passwordChange}
                        message={passwordMessage}
                    />
                </div>
                <div css={s.inputBox}>
                    <InputWithMessagebox 
                        type={"password"}
                        name={"checkPassword"}
                        value={checkPassword}
                        placeholder={"비밀번호확인"}
                        onChange={checkPasswordChange}
                        message={checkPasswordMessage}
                    />
                </div>
                <div css={s.inputBox}>
                    <InputWithMessagebox 
                        type={"text"}
                        name={"name"}
                        value={name}
                        placeholder={"이름"}
                        onChange={nameChange}
                        message={nameMessage}
                    />
                </div>
                <div css={s.inputBox}>
                    <InputWithMessagebox 
                        type={"email"}
                        name={"email"}
                        value={email}
                        placeholder={"이메일"}
                        onChange={emailChange}
                        message={emailMessage}
                    />
                </div>
                <div css={s.inputBox}>
                    <InputWithMessagebox 
                        type={"text"}
                        name={"phone"}
                        value={phone}
                        placeholder={"휴대전화번호"}
                        onChange={phoneChange}
                        message={phoneMessage}
                    />
                </div>
                <div css={s.buttonBox}>
                    <button onClick={handleSubmitClick}>제출</button>

                </div>
            </div>
        </motion.div>
    );
}

export default UserSignupPage;
