import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: 100%;
    height: 100%;
    background-color: transparent;
`;

export const signupBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 350px;
    height: 550px;
    box-shadow: 1px 0px 2px 1px black;
    & > h1 {
        margin-bottom: 20px;
        color: #ffffff;
    }
`;

export const inputBox = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const buttonBox = css`
    margin-top: 10px;
    & > button {
        width: 100px;
        height: 30px;
        background-color: transparent;
        color: #999999;
        font-size: 14px;
        box-shadow: 3px 5px 8px 3px hsla(0, 0%, 0%, 0.411);
        cursor: pointer;
        &:active {
            box-shadow: inset 3px 5px 8px 3px hsla(0, 0%, 0%, 0.411);
        }
    }
`;
