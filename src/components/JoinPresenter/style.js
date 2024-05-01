import { css } from '@emotion/react';

export const layout = css`
    box-sizing: border-box;
    padding: 20px;
    border: 1px solid #ccc;
    background-color: transparent;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const signupBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 1px 0px 2px 1px black;
    & > h1 {
        margin-bottom: 20px;
        color: #ffffff;
    }
`;


export const inputBox = css`
    margin-bottom: 10px;
`;

export const buttonBox = css`
    margin-top: 20px;
`;

export const btnPrimary = css`
    color: black;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
`;