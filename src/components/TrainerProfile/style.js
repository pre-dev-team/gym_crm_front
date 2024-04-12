import { css } from '@emotion/react';

export const profileContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 5px;
  border: 1px solid #ccc;
  padding: 10px;
`;

export const profileImg = css`
    box-sizing: border-box;
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
`;