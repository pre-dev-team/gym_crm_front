import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 400px;
    background-color: #ededed;
    padding: 10px;
    overflow: hidden;
    & > h1 {
        margin: 0px auto;
        margin-bottom: 20px;
    }
    & > h4 {
        margin: 0px;
        height: 30px;
        margin-bottom: 20px;
        color: #ff5151;
    }
    & > button {
        width: 200px;
        padding: 3px;
        cursor: pointer;
    }
`;

export const inputBox = css`
    box-sizing: border-box;
    width: 100%;
    padding: 10px;

    & > input {
        box-sizing: border-box;
        margin-right: 5px;
        width: 100%;
        height: 25px;
        margin-bottom: 5px;
    }
`;
