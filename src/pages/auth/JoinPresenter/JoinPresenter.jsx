/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRecoilState } from "recoil";
import { agreedState } from "../../../atoms/agreed";
import { useNavigate } from "react-router-dom";
import AgreementAccordion from "../../../components/auth/AgreementAccordion/AgreementAccordion";
import { marketingTerms, serviceTerms } from "./terms";
function JoinPresenter() {
    const [agreed, setAgreed] = useRecoilState(agreedState);
    const [check, setCheck] = useState({
        "서비스 동의": {
            status: false,
        },
        "마켓팅 동의": {
            status: false,
        },
    });
    const navigator = useNavigate();

    useEffect(() => {
        if (agreed) {
            alert("성공적으로 완료되었습니다. 회원가입 페이지로 넘어갑니다.");
            navigator("/auth/user/signup");
        }
    }, [agreed]);

    return (
        <motion.div
            transition={{ duration: 0.3, delay: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            css={s.layout}
        >
            <h1>약관동의</h1>
            <div>
                <AgreementAccordion title={"서비스 동의"} content={marketingTerms} setCheck={setCheck} check={check} />
                <AgreementAccordion title={"마켓팅 동의"} content={serviceTerms} setCheck={setCheck} check={check} />
            </div>
        </motion.div>
    );
}

export default JoinPresenter;
