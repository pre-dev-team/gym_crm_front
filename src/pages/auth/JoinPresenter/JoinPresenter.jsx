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
        "서비스 동의": false,
        "마켓팅 동의": false,
    });

    const navigator = useNavigate();

    useEffect(() => {
        if (!Object.values(check).includes(false)) {
            setAgreed(() => true);
        } else {
            setAgreed(() => false);
        }
    }, [check]);

    return (
        <motion.div
            transition={{ duration: 0.3, delay: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            css={s.layout(agreed)}
        >
            <h1>약관동의</h1>
            <div>
                <AgreementAccordion title={"서비스 동의"} content={marketingTerms} setCheck={setCheck} check={check} />
                <AgreementAccordion title={"마켓팅 동의"} content={serviceTerms} setCheck={setCheck} check={check} />
            </div>
            <button disabled={!agreed} onClick={() => navigator("/auth/user/signup")}>
                다음
            </button>
        </motion.div>
    );
}

export default JoinPresenter;
