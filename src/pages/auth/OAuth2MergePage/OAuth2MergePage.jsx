/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { motion } from "framer-motion";
import useInput from "../../../hooks/useInput";
import { useMutation } from "react-query";
import { oAtuh2MergeRequest } from "../../../apis/api/oAuth2Merge";
import { useSearchParams } from "react-router-dom";
import InputWithMessagebox from "../../../components/auth/InputWithMessageBox/InputWithMessagebox";
import { useEffect, useState } from "react";

function OAuth2MergePage() {
    const [searchParams] = useSearchParams();
    const [username, usernameChange, usernameMessage, , setUsernameMessage] = useInput("username");
    const [password, passwordChange, passwordMessage, , setPasswordMessage] = useInput("password");
    const [isValidAll, setIsValidAll] = useState(false);

    useEffect(() => {
        const messageTypeList = [usernameMessage?.type, passwordMessage?.type];
        if (messageTypeList.indexOf(undefined) !== -1 || messageTypeList.indexOf("error") !== -1) {
            setIsValidAll(() => false);
        }
        if (messageTypeList.length === messageTypeList.filter((type) => type === "success").length) {
            setIsValidAll(() => true);
        }
    }, [usernameMessage, passwordMessage]);
    const oAuth2MergeMutation = useMutation({
        mutationKey: "oAuth2MergeMutation",
        mutationFn: oAtuh2MergeRequest,
        onSuccess: (response) => {
            alert("계정 통합이 완료되었습니다.\n다시 로그인 하세요.");
            window.location.replace("/auth/user/signin");
        },
        onError: (error) => {
            alert(error.response.data);
        },
    });

    const handleMergeClick = () => {
        oAuth2MergeMutation.mutate({
            username,
            password,
            oauth2Name: searchParams.get("name"),
            oauth2ProviderName: searchParams.get("provider"),
        });
    };

    return (
        <div css={s.layout}>
            <motion.div
                transition={{ duration: 0.3, delay: 0 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                css={s.choiceBox}
            >
                <h1>{`기존계정으로 \n로그인 하십시오`}</h1>
                <InputWithMessagebox
                    value={username}
                    name="username"
                    type="text"
                    onChange={usernameChange}
                    placeholder="기존 계정"
                    message={usernameMessage}
                />
                <InputWithMessagebox
                    value={password}
                    name="password"
                    type="password"
                    onChange={passwordChange}
                    placeholder="패스워드"
                    message={passwordMessage}
                />
                <button disabled={!isValidAll} onClick={handleMergeClick}>
                    로그인
                </button>
            </motion.div>
        </div>
    );
}

export default OAuth2MergePage;
