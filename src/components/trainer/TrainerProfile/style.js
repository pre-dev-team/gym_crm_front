import { css } from '@emotion/react';

export const profileContainer = css`
  display: flex;
  margin: 10px 5px;
`;

export const profileBox = css`
`;

export const profileImg = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #dbdbdb;
    width: 130px;
    height: 130px;
    overflow: hidden;
    & > img {
        height: 100%;
    }
`;

export const profileInfo = css`
  display: flex;
  flex-direction: column;
  margin-top: 5px;

  & > div {
    padding: 3px;
    font-weight: 600;
  }

  & > div:nth-of-type(1) {
    margin: 10px 0px 0px 5px;
    font-size: 25px;
  }

  & > div:nth-of-type(2) {
    margin: 5px;
    font-size: 15px;
  }

  & > div:nth-of-type(3) {
    margin-left: 5px;
    font-size: 15px;
    text-align: center;
  }

`;

