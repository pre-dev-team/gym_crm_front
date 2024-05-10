import { css } from "@emotion/react";

export const container = css`
    overflow: auto;
    flex-direction: column;
    width: 100%;
    height: 680px;
    padding: 20px;
    font-size: 10px;
    color: #ededed;
    & > h1 {
        font-size: 32px;
        margin-bottom: 50px;
    }
`;
export const cardBox = css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const card = css`
    box-sizing: border-box;
    padding: 10px;
    width: 354px;
    height: 150px;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    background-color: #ededed;
    color: black;
    box-shadow: 1px 1px 1px 1px;
`;

export const leftBox = css`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
`;
export const photoBox = css`
    width: 100px;
    height: 100px;
    overflow: hidden;
    border-radius: 50%;
    & > img {
        width: 100%;
    }
`;
export const rightBox = css`
    position: relative;
    width: 55%;
    height: 100%;
    display: flex;
    flex-direction: column;
    & > h1 {
        margin: 0;
    }
    & > div:nth-of-type(4) {
        position: absolute;
        bottom: 0;
        right: 0;
    }
`;
export const starBox = css`
    width: 100%;
    font-size: 16px;
    margin-bottom: 5px;
    & > div:nth-of-type(1) {
        font-size: 12px;
        width: 100%;
    }
`;
export const textBox = css`
    width: 100%;
    font-size: 12px;
`;
