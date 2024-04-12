import { css } from '@emotion/react';

export const profileContainer = css`
  display: flex;
  align-items: center;
  margin-top: 10px;
  padding: 10px;
`;

export const profileImg = css`

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
  
  margin-left: 20px;
`;
