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
        transition: transform 0.3s, box-shadow 0.3s;
        &:focus {
            transform: translateY(2px);
            box-shadow: inset 3px 5px 8px 3px hsla(0, 0%, 0%, 0.411);
        }
    }
`;

export const inputIcon = (type) => css`
    position: absolute;
    right: 20px;
    top: 20px;
    display: flex;
    justify-content: right;
    color: ${type === "error" ? "#ff3030" : "#00921b"};
`;

export const messageBox = (type) => css`
    position: absolute;
    bottom: -15px;
    height: 30px;
    font-size: 10px;
    padding: 0px 5px;
    background-color: transparent;
    color: ${type === "error" ? "#ff3030" : "#00921b"};
`;
