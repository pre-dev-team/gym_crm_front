import { css } from '@emotion/react';

export const profileContainer = css`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const profileImg = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #dbdbdb;
    border-radius: 50%;
    width: 144px;
    height: 144px;
    overflow: hidden;
    & > img {
        height: 100%;
    }
`;

export const profileInfo = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 20px;
`;