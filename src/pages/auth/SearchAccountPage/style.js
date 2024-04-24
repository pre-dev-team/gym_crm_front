import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    & > h1 {
        font-size: 36px;
        color: white;
    }
`;

export const searchBox = css`
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    width: 350px;
    height: 300px;
    box-shadow: 1px 0px 2px 1px black;
`;

export const selectBox = css`
    position: absolute;
    top: 30px;
    width: 348px;
    height: 300px;
`;

export const linkBox = css`
    position: absolute;
    display: flex;
    justify-content: flex-end;
    top: 0;
    box-sizing: border-box;
    width: 100%;
    height: 10%;
    font-size: 14px;
    & > a {
        color: #ffffff;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 5px;
        height: 100%;
        width: 30%;
        border-collapse: collapse;
        border-bottom: 2px solid #1a1a1a;
    }
`;

export const inputBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 30px 0px 10px;
    padding: 20px 10px;
    height: 40%;
`;

export const col = css`
    &::before,
    ::after {
        margin: 0px 5px;
        content: "";
    }
`;

export const buttonBox = (isActive) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 15px;
    & > button {
        width: 100px;
        height: 30px;
        background-color: ${isActive ? "white" : "transparent"};
        color: #999999;
        font-size: 14px;
        box-shadow: 3px 5px 8px 3px hsla(0, 0%, 0%, 0.411);
        transition: transform 0.3s, box-shadow 0.3s;
        cursor: pointer;
        &:hover {
            transform: ${isActive ? "translateY(0px)" : "translateY(2px)"};
        }
        &:active {
            ${isActive ? "" : "box-shadow: inset 3px 5px 8px 3px hsla(0, 0%, 0%, 0.411)"};
        }
    }
`;

export const timer = css`
    position: absolute;
    color: red;
    font-size: 12px;
    top: 120px;
    left: 50%;
    transform: translateX(-50%);
`;
