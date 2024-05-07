/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./style";
import { useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";

function OAuth2Page() {
    const [isNoClick, setIsNoClick] = useState(false);
    const [searchParams] = useSearchParams();
    const name = searchParams.get("name");
    const provider = searchParams.get("provider");
    const navigator = useNavigate();
    return (
        <div css={s.layout}>
            {isNoClick ? (
                <></>
            ) : (
                <motion.div
                    transition={{ duration: 0.3, delay: 0 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    css={s.choiceBox}
                >
                    <h1>{`기존에 가입하신 \n계정이 있으십니까?`}</h1>
                    <button onClick={() => navigator(`/auth/oauth2/merge?name=${name}&provider=${provider}`)}>
                        예
                    </button>
                    <button onClick={() => setIsNoClick(() => true)}>아니오</button>
                </motion.div>
            )}
            {isNoClick ? (
                <motion.div
                    transition={{ duration: 0.3, delay: 0 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    css={s.choiceBox}
                >
                    <h1>{`${provider}로 새로 \n 회원가입하시겠습니까?`}</h1>
                    <button onClick={() => navigator(`/auth/oauth2/signup?name=${name}&provider=${provider}`)}>
                        {provider}로 회원가입하기
                    </button>
                </motion.div>
            ) : (
                <></>
            )}
        </div>
    );
}

export default OAuth2Page;
