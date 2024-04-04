import { css } from "@emotion/react";

export const layout = css`
    position: relative;
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
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.5);
    }
`;

export const inputIcon = (type) => css`
    position: absolute;
    right: 35px;
    top: 2px;
    display: flex;
    justify-content: right;
    color: ${type === "error" ? "#ff3030" : "#00921b"};
`;

export const messageBox = css`
    height: 30px;
    font-size: 13px;
    padding: 0px 5px;
    background-color: transparent;
    color: white;
`;

