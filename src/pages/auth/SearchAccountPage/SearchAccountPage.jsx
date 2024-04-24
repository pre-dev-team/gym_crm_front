/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { motion } from "framer-motion";
import InputWithMessagebox from "../../../components/InputWithMessageBox/InputWithMessagebox";
import useInput from "../../../hooks/useInput";
import { useMutation } from "react-query";
import { searchUsernameByEmailRequest } from "../../../apis/api/account";
import { useEffect, useState } from "react";

const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

function SearchAccountPage(props) {
    const [name, handleNameChange] = useInput();
    const [email, handleEmailChange] = useInput();
    const [secound, setSecound] = useState(180);
    const [isMailSended, setIsMailSended] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setSecound((prevSecound) => {
                if (prevSecound === 0) {
                    clearInterval(timer);
                    return 0;
                }
                return prevSecound - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [isMailSended]);

    const searchUsernameByEmailMutation = useMutation({
        mutationKey: "searchUsernameByEmailMutation",
        mutationFn: searchUsernameByEmailRequest,
        retry: 0,
        onSuccess: (response) => {
            if (response.data === false) {
                alert("해당 사용자가 존재하지 않습니다");
                return;
            }
            alert("해당 메일로 계정이름을 전송하였습니다.");
            setIsMailSended(() => true);
            setSecound(() => 180);
            setTimeout(() => {
                setIsMailSended(() => false);
            }, 180000);
        },
    });

    const handleEmailSendClick = () => {
        if (window.confirm("메일을 전송할까요?")) {
            searchUsernameByEmailMutation.mutate({
                name: name,
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
            <h1>계정 찾기</h1>
            <div css={s.searchBox}>
                <div css={s.selectBox}>
                    <div css={s.inputBox}>
                        <InputWithMessagebox
                            type={"text"}
                            name={"name"}
                            placeholder={"이름"}
                            value={name}
                            onChange={handleNameChange}
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
                    {isMailSended ? <h4 css={s.timer}>다음 메일 전송까지 {formatTime(secound)}</h4> : <></>}
                </div>
            </div>
        </motion.div>
    );
}

export default SearchAccountPage;
