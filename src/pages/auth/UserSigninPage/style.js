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

export const loginBox = css`
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    width: 350px;
    height: 430px;
    box-shadow: 1px 0px 2px 1px black;
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
    height: 10%;
    font-size: 14px;
    & > a {
        color: #ffffff;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 50%;
        border-collapse: collapse;
    }
    & > a:nth-of-type(1) {
        box-shadow: inset 3px 5px 8px 3px hsla(0, 0%, 0%, 0.411);
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
    height: 50px;
    & > a {
        padding: 10px 20px;
        font-size: 12px;
        color: #ffffff;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 3px 5px 8px 3px hsla(0, 0%, 0%, 0.411);
        margin: 0px 10px;
        transition: transform 0.3s, box-shadow 0.3s;
        &:hover {
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
            transform: translateY(2px);
        }
        &:active {
            box-shadow: inset 3px 5px 8px 3px hsla(0, 0%, 0%, 0.411);
        }
    }
`;

export const buttonBox = css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 15px;
    & > button {
        width: 100px;
        height: 30px;
        background-color: transparent;
        color: #999999;
        font-size: 14px;
        box-shadow: 3px 5px 8px 3px hsla(0, 0%, 0%, 0.411);
        transition: transform 0.3s, box-shadow 0.3s;
        cursor: pointer;
        &:hover {
            transform: translateY(2px);
        }
        &:active {
            box-shadow: inset 3px 5px 8px 3px hsla(0, 0%, 0%, 0.411);
        }
    }
`;

export const line = css`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 12px;
    cursor: default;
    &::before,
    ::after {
        margin: 0px 5px;
        content: "―――――――――";
    }
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
    margin-top: 10px;
    & > a {
        height: 25px;
        width: 25px;
        padding: 5px;
        color: #ffffff;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0px 15px;
        & > img {
            height: 100%;
        }
    }
`;
export const blank = css`
    flex-grow: 0.4;
`;
