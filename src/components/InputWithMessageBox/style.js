import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 60px;
    padding: 0px 10px;
    background-color: transparent;
`;

export const inputBox = css`
    height: 30px;
    & > input {
        box-sizing: border-box;
        border: none;
        outline: none;
        padding: 0px 5px;
        height: 25px;
        width: 260px;
        font-size: 16px;
        color: white;
        background-color: transparent;
        margin-bottom: 20px;
        box-shadow: 3px 5px 8px 3px hsla(0, 0%, 0%, 0.411);
    }
`;

export const messageBox = css`
    height: 30px;
    font-size: 14px;
    padding: 0px 5px;
    background-color: transparent;
    color: white;
`;
