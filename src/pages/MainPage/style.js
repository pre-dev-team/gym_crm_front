import { css } from "@emotion/react";

export const background = css`
    width: 100%;
    height: 680px;
    position: relative;
    overflow-y: auto;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const box1 = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 680px;
    align-items: center;
    color: white;
    font-size: 25px;
    text-align: center;
    & > img {
        height: 30%;
    }
`;

export const text1 = css`
    width: 100%;
    height: 130px;
    font-size: 24px;
    margin-top: 20px;
    font-weight: 500;
`;
export const text2 = css`
    width: 100%;
    height: 100px;
    font-size: 36px;
    font-weight: 700;
    text-align: center;
`;
export const text3 = css`
    width: 100%;
    height: 100px;
    font-size: 14px;
    text-align: center;
`;
export const logo = css`
    width: 100%;
    height: 240px;
    & > img {
        width: 90%;
    }
`;
export const text4 = css`
    width: 100%;
    font-size: 36px;
    font-weight: 700;
`;

export const box2 = css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 680px;
    background-color: #343435;
`;

export const box3 = css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 680px;
    background-color: #515152;
`;
