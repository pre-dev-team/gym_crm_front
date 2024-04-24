import { css } from "@emotion/react";

export const background = css`
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #00000042;
    z-index: 99;
`;

export const container = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 5px 10px;
    background-color: #ededed;

    & > button {
        cursor: pointer;
        margin-top: 15px;
        width: 150px;
    }
`;

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 90%;
`;
