/** @jsxImportSource @emotion/react */
import useInput from "../../../hooks/useInput";
import InputWithMessagebox from "../../InputWithMessageBox/InputWithMessagebox";
import * as s from "./style";
import { motion } from "framer-motion";

function EditPasswordModal({ accountId, isPasswordModalOpen, setIsPasswordModalOpen }) {
    const [prevPassword, handlePrevPasswordChange, prevPasswordMessage, setPrevPassword] = useInput();
    const [password, handlePasswordChange, passwordMessage, setPassword] = useInput();
    const [checkPassword, handleCheckPasswordChange, checkPasswordMessage, setCheckPassword] = useInput();
    const handleReviewClick = () => {};
    return (
        <motion.div
            transition={{ duration: 0.2, delay: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            css={s.layout(isPasswordModalOpen)}
        >
            <div css={s.changeBox}>
                <h1>비밀번호 변경</h1>
                <div css={s.passwordBox}>
                    <InputWithMessagebox
                        type={"password"}
                        placeholder={"기존 패스워드"}
                        value={prevPassword}
                        onChange={handlePrevPasswordChange}
                        message={prevPasswordMessage}
                        name={"prevPassword"}
                    />
                    <InputWithMessagebox
                        type={"password"}
                        placeholder={"변경 패스워드"}
                        value={password}
                        onChange={handlePasswordChange}
                        message={passwordMessage}
                        name={"password"}
                    />
                    <InputWithMessagebox
                        type={"password"}
                        placeholder={"확인"}
                        value={checkPassword}
                        onChange={handleCheckPasswordChange}
                        message={checkPasswordMessage}
                        name={"checkpassword"}
                    />
                </div>
                <div css={s.buttonBox}>
                    <button onClick={handleReviewClick}>변경하기</button>
                    <button onClick={() => setIsPasswordModalOpen(() => false)}>닫기</button>
                </div>
            </div>
        </motion.div>
    );
}

export default EditPasswordModal;
