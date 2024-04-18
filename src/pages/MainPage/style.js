import { css } from "@emotion/react";

export const background = css`
    width: 100%;
    height: 680px;
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
    text-align: center;
    justify-content: center;
    color: white;
    font-size: 25px;
    & > img {
        height: 30%;
    }
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
