/** @jsxImportSource @emotion/react */
import { useMutation } from "react-query";
import useInput from "../../../hooks/useInput";
import InputWithMessagebox from "../../InputWithMessageBox/InputWithMessagebox";
import * as s from "./style";
import { motion } from "framer-motion";
import { editUserPasswordRequest } from "../../../apis/api/account";
import { useEffect, useState } from "react";

function EditPasswordModal({ accountId, isPasswordModalOpen, setIsPasswordModalOpen }) {
    const [prevPassword, handlePrevPasswordChange] = useInput();
    const [password, handlePasswordChange, passwordMessage, setPassword] = useInput("password");
    const [checkPassword, handleCheckPasswordChange, checkPasswordMessage, setCheckPassword, setCheckPasswordMessage] =
        useInput();
    const editPasswordMutation = useMutation({
        mutationKey: "editPasswordMutation",
        mutationFn: editUserPasswordRequest,
        retry: 0,
        onSuccess: (response) => {
            alert("비밀번호가 변경되었습니다");
            window.location.reload();
        },
    });

    const handleEditPasswordClick = () => {
        editPasswordMutation.mutate({
            accountId: accountId,
            prevPassword: prevPassword,
            password: password,
            checkPassword: checkPassword,
        });
    };

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
    }, [password, checkPassword]);
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
                    <button onClick={handleEditPasswordClick}>변경하기</button>
                    <button onClick={() => setIsPasswordModalOpen(() => false)}>닫기</button>
                </div>
            </div>
        </motion.div>
    );
}

export default EditPasswordModal;
