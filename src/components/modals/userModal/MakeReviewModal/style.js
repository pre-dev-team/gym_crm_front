import { css } from "@emotion/react";

export const layout = (isOpen) => css`
    position: absolute;
    box-sizing: border-box;
    top: ${isOpen ? "50%" : "0"};
    left: ${isOpen ? "50%" : "0"};
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: ${isOpen ? "370px" : "0px"};
    height: ${isOpen ? "400px" : "0px"};
    background-color: #494949;
    box-shadow: 3px 1px 1px 1px black;
    transition: all 0.5s ease;
    opacity: ${isOpen ? 1 : 0};
    z-index: ${isOpen ? 99 : -2};
`;

export const reviewBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 90%;
    & > h1 {
        font-size: 24px;
    }
    & > h2 {
        position: absolute;
        bottom: 140px;
        right: 35px;
        font-size: 14px;
        margin: 0;
    }
`;
export const starBox = css`
    height: 15%;
`;
export const textBox = css`
    & > textarea {
        border: none;
        resize: none;
        width: 300px;
        height: 70px;
    }
    height: 15%;
`;

export const buttonBox = css`
    width: 200px;
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    & > button {
        width: 150px;
        height: 30px;
        cursor: pointer;
        border: none;
        background-color: #c9c9c9;
        box-shadow: 1px 1px 1px 1px black;
        transition: all 0.4s;
        &:hover {
            box-shadow: inset 2px 1px 3px 1px black;
            transform: translateY(2px);
        }
        &:active {
            background-color: #999999;
        }
    }
    & > button:nth-of-type(1) {
        margin-bottom: 10px;
    }
`;
