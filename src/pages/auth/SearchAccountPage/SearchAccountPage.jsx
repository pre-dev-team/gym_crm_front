/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import * as s from "./style";
import { motion } from "framer-motion";
import InputWithMessagebox from "../../../components/InputWithMessageBox/InputWithMessagebox";
import useInput from "../../../hooks/useInput";
import googleImg from "../../../assets/icons/google.png";
import naverImg from "../../../assets/icons/naver.png";
import kakaoImg from "../../../assets/icons/kakao.png";
import { useMutation } from "react-query";
import { SigninRequest } from "../../../apis/api/signin";
import { searchUsernameByEmailRequest } from "../../../apis/api/account";

function SearchAccountPage(props) {
    const [name, handleNameChange] = useInput();
    const [email, handleEmailChange] = useInput();

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
                    <div css={s.buttonBox}>
                        <button onClick={handleEmailSendClick}>메일 전송</button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default SearchAccountPage;
