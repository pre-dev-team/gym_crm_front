/** @jsxImportSource @emotion/react */
import { motion } from "framer-motion";
import InputWithMessagebox from "../../../components/auth/InputWithMessageBox/InputWithMessagebox";
import useInput from "../../../hooks/useInput";
import * as s from "./style";
import { useMutation } from "react-query";
import { searchPasswordByEmailRequest } from "../../../apis/api/account";
import { useEffect, useMemo, useState } from "react";

const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

function SearchPasswordPage(props) {
    const [username, handleUsernameChange] = useInput();
    const [email, handleEmailChange] = useInput();
    const [second, setSecond] = useState(180);
    const [isMailSended, setIsMailSended] = useState(false);

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setSecond((prevSecound) => {
    //             if (prevSecound === 0) {
    //                 clearInterval(timer);
    //                 return 0;
    //             }
    //             return prevSecound - 1;
    //         });
    //     }, 1000);
    //     return () => clearInterval(timer);
    // }, [isMailSended]);

    const time = useMemo(() => {
        const timer = setInterval(() => {
            setSecond((prevSecound) => {
                if (prevSecound === 0) {
                    clearInterval(timer);
                    return 0;
                }
                return prevSecound - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [second]);

    const searchPasswordByEmailMutation = useMutation({
        mutationKey: "searchPasswordByEmailMutation",
        mutationFn: searchPasswordByEmailRequest,
        retry: 0,
        onSuccess: (response) => {
            console.log(response);
            if (response.data === false) {
                alert("해당 사용자가 존재하지 않습니다");
                return;
            }
            alert("해당 메일로 임시비밀번호를 전송하였습니다.");
            setIsMailSended(() => true);
            setSecond(() => 180);
            setTimeout(() => {
                setIsMailSended(() => false);
            }, 180000);
        },
    });

    const handleEmailSendClick = () => {
        if (window.confirm("메일을 전송할까요?")) {
            searchPasswordByEmailMutation.mutate({
                username: username,
                email: email,
            });
        }
    };

    return (
        <motion.div
            transition={{ duration: 0.3, delay: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            css={s.layout}
        >
            <h1>비밀번호 찾기</h1>
            <div css={s.searchBox}>
                <div css={s.selectBox}>
                    <div css={s.inputBox}>
                        <InputWithMessagebox
                            type={"text"}
                            name={"username"}
                            placeholder={"아이디"}
                            value={username}
                            onChange={handleUsernameChange}
                        />
                        <InputWithMessagebox
                            type={"email"}
                            name={"email"}
                            placeholder={"이메일"}
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div css={s.buttonBox(isMailSended)}>
                        <button disabled={isMailSended} onClick={handleEmailSendClick}>
                            메일 전송
                        </button>
                    </div>
                    {isMailSended ? <h4 css={s.timer}>다음 메일 전송까지 {formatTime(second)}</h4> : <></>}
                </div>
            </div>
        </motion.div>
    );
}

export default SearchPasswordPage;
