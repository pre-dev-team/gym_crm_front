/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CheckBox from '../CheckBox/CheckBox';

function JoinPresenter() {
  const [ageCheck, setAgeCheck] = useState(false);
  const [useCheck, setUseCheck] = useState(false);
  const [marketingCheck, setMarketingCheck] = useState(false);
  const [allCheck, setAllCheck] = useState(false);

  useEffect(() => {
    const checkAllAgreed = () => {
      if (ageCheck && useCheck && marketingCheck) {
        setAllCheck(true); // 모든 필수 항목이 체크되면 전체 동의 체크
      } else {
        setAllCheck(false); // 하나라도 체크가 해제되면 전체 동의 체크 해제
      }
    };

    checkAllAgreed();

    return () => {
      // Clean-up 함수
    };
  }, [ageCheck, useCheck, marketingCheck]);

  const handleAllCheckboxChange = () => {
    const toggleAll = !allCheck;
    setAllCheck(toggleAll);

    setAgeCheck(toggleAll);
    setUseCheck(toggleAll);
    setMarketingCheck(toggleAll);
  };

  const areAllRequiredChecked = () => {
    return ageCheck && useCheck;
  };

  const handleAgree = () => {
    if (!areAllRequiredChecked()) {
      alert('필수 약관에 모두 동의해야 합니다.');
      if (!ageCheck || !useCheck) {
        // 필수 항목 중 하나라도 누락된 경우, 모든 필수 항목을 선택하도록 유도
        setAgeCheck(true);
        setUseCheck(true);
        setAllCheck(true);
      }
    } else {
      // 필수 체크 항목 모두 선택되었을 때
      if (areAllRequiredChecked() || (ageCheck && useCheck)) {
        alert('성공적으로 완료되었습니다. 회원가입 페이지로 넘어갑니다.');
        window.location.href = "/auth/user/signup";
      }
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
      <h1>약관동의</h1>
      <div css={s.signupBox}>
        <div css={s.inputBox}>
          <input
            type="checkbox"
            id="all-check"
            checked={allCheck}
            onChange={handleAllCheckboxChange}
          />
          <label htmlFor="all-check">전체동의</label>
        </div>
        <div css={s.inputBox}>
          <CheckBox
            checked={ageCheck}
            onChange={() => setAgeCheck((prev) => !prev)}
          >
            만 14세 이상입니다 (필수)
          </CheckBox>
        </div>
        <div css={s.inputBox}>
          <CheckBox
            checked={useCheck}
            onChange={() => setUseCheck((prev) => !prev)}
          >
            이용약관 (필수)
          </CheckBox>
        </div>
        <div css={s.inputBox}>
          <CheckBox
            checked={marketingCheck}
            onChange={() => setMarketingCheck((prev) => !prev)}
          >
            마케팅 동의 (선택)
          </CheckBox>
        </div>
        <button
          type="button"
          css={s.btnPrimary}
          onClick={handleAgree}
          disabled={!areAllRequiredChecked()}
        >
          약관동의
        </button>
      </div>
    </motion.div>
  );
}

export default JoinPresenter;
