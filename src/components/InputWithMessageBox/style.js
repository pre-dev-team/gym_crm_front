import { css } from '@emotion/react';

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 300px;
    height: 60px;
    padding: 0px 10px;
    background-color: transparent;
`;

export const inputBox = css`
    height: 30px;
    & > input {
        color: white;
        font-size: 16px;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid black;
        outline: none;
        padding: 0px 5px;
        background-color: transparent;
    }
`;

export const messageBox = css`
    height: 30px;
    font-size: 14px;
    padding: 0px 5px;
    background-color: transparent;
    color: white;
`;