import { css } from "@emotion/react";

export const layout = css`
    c & > h1 {
        color: white;
    }
`;

export const loginBox = css`
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    width: 350px;
    height: 360px;
    border: 1px solid #ffffff;
`;

export const selectBox = css`
    position: absolute;
    top: 54px;
    width: 348px;
    height: 300px;
`;

export const linkBox = css`
    position: absolute;
    display: flex;
    top: 0;
    box-sizing: border-box;
    width: 100%;
    height: 15%;
    font-size: 16px;
    & > a {
        color: #ffffff;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 50%;
        border-collapse: collapse;
        border: 1px solid #ffffff;
    }
    & > a:nth-of-type(1) {
        border-bottom: none;
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

export const searchBox = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    & > a {
        font-size: 12px;
        color: #ffffff;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0px 10px;
    }
`;

export const buttonBox = css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    & > button {
        background-color: white;
        border: none;
        cursor: pointer;
        width: 130px;
    }
`;

export const line = css`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const oauthBox = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 30px;
    & > a {
        height: 20px;
        width: 20px;
        color: #ffffff;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0px 10px;
        & > img {
            height: 100%;
        }
    }
`;
