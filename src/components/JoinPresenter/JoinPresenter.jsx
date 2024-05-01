/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRecoilState, useRecoilValue } from 'recoil';
// import useHistory from "react-router-dom"
import { agreeState, allAgreedSelector } from '../../atoms/agreed';

import * as s from './style';
import React from 'react';
import { motion } from 'framer-motion';
import CheckBox from '../CheckBox/CheckBox';

function JoinPresenter() {
  const [agree, setAgree] = useRecoilState(agreeState);
  const allAgreed = useRecoilValue(allAgreedSelector);
  // const history = useHistory();

  const handleAgree = () => {
    const { age, use } = agree;
    if (age && use) {
      alert("x");
    } else {
      alert('약관에 모두 동의해야 합니다.');
    }
  };

  const handleCheckboxChange = (key) => {
    setAgree((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
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
            checked={allAgreed}
            onChange={() =>
              setAgree((prev) => ({
                age: !prev.age,
                use: !prev.use,
                marketing: prev.marketing, // 마케팅 동의는 상태 변경 없이 유지
              }))
            }
          />
          <label htmlFor="all-check">
            전체동의
          </label>
        </div>
        <div css={s.inputBox}>
          <CheckBox
            checked={agree.age}
            onChange={() => handleCheckboxChange('age')}
          >
            만 14세 이상입니다 (필수)
          </CheckBox>
        </div>
        <div css={s.inputBox}>
          <CheckBox
            checked={agree.use}
            onChange={() => handleCheckboxChange('use')}
          >
            이용약관 (필수)
          </CheckBox>
        </div>
        <div css={s.inputBox}>
          <CheckBox
            checked={agree.marketing}
            onChange={() => handleCheckboxChange('marketing')}
          >
            마케팅 동의 (선택)
          </CheckBox>
        </div>
        <button
          type="button"
          css={s.btnPrimary}
          onClick={handleAgree}
          disabled={!allAgreed}
        >
          약관동의
        </button>
      </div>
    </motion.div>
  );
}

export default JoinPresenter;
