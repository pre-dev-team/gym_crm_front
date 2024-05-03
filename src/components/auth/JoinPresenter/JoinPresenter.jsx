/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CheckBox from "../../common/CheckBox/CheckBox";
import { useRecoilState } from "recoil";
import { agreedState } from "../../../atoms/agreed";
import { useNavigate } from "react-router-dom";
import { ServiceTerms } from "./ServiceTerms";
import { MarketingTerms } from "./MarketingTerms";

function JoinPresenter() {
    const [ageCheck, setAgeCheck] = useState(false);
    const [useCheck, setUseCheck] = useState(false);
    const [marketingCheck, setMarketingCheck] = useState(false);
    const [allCheck, setAllCheck] = useState(false);

    const [agreed, setAgreed] = useRecoilState(agreedState);

    const navigator = useNavigate();

    const [isTextareaExpanded, setTextareaExpanded] = useState(false);
    const [marketingTextareaExpanded, setMarketingTextareaExpanded] = useState(false);

    const toggleTextarea = () => {
        setTextareaExpanded((prev) => !prev);
    };

    const toggleMarketingTextarea = () => {
        setMarketingTextareaExpanded((prev) => !prev);
    };

    useEffect(() => {
        const checkAllAgreed = () => {
            if (ageCheck && useCheck && marketingCheck) {
                setAllCheck(true); // 모든 필수 항목이 체크되면 전체 동의 체크
            } else {
                setAllCheck(false);
            }
        };

        checkAllAgreed();

        return () => {};
    }, [ageCheck, useCheck, marketingCheck]);

    const handleAllCheckboxChange = () => {
        const toggleAll = !allCheck;
        setAllCheck(toggleAll);

        setAgeCheck(toggleAll);
        setUseCheck(toggleAll);
        setMarketingCheck(toggleAll);
    };

    const handleAgree = () => {
        if (!ageCheck || !useCheck) {
            alert("필수 약관에 모두 동의해야 합니다.");
            return;
        }

        if (!marketingCheck && (!ageCheck || !useCheck)) {
            alert("필수 약관에 모두 동의해야 합니다.");
            return;
        }

        setAgreed(true);
    };

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
            <div css={s.inputBox}>
                <input type="checkbox" id="all-check" checked={allCheck} onChange={handleAllCheckboxChange} />
                <label htmlFor="all-check">전체동의</label>
            </div>
            <div css={s.signupBox}>
                <div css={s.listBox}>
                    <div css={s.inputBox}>
                        <CheckBox checked={ageCheck} onChange={() => setAgeCheck((prev) => !prev)}>
                            만 14세 이상입니다 (필수)
                        </CheckBox>
                    </div>
                    <div css={s.inputBox}>
                        <CheckBox checked={useCheck} onChange={() => setUseCheck((prev) => !prev)}></CheckBox>
                        <label onClick={toggleTextarea} css={s.selectHeader}>
                            이용약관 (필수)
                        </label>
                        <textarea
                            name="service"
                            cols="40"
                            rows={isTextareaExpanded ? "8" : "1"}
                            readOnly
                            value={ServiceTerms}
                        />
                    </div>
                    <div css={s.inputBox}>
                        <CheckBox
                            checked={marketingCheck}
                            onChange={() => setMarketingCheck((prev) => !prev)}
                        ></CheckBox>
                        <label onClick={toggleMarketingTextarea} css={s.selectHeader}>
                            마케팅 동의 (선택)
                        </label>
                        <textarea
                            name="service"
                            cols="40"
                            rows={marketingTextareaExpanded ? "8" : "1"}
                            readOnly
                            value={MarketingTerms}
                        />
                    </div>
                </div>
                <button type="button" css={s.btnPrimary} onClick={handleAgree}>
                    약관동의
                </button>
            </div>
        </motion.div>
    );
}

export default JoinPresenter;
