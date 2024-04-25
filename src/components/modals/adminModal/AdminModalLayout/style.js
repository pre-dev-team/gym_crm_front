import { css } from "@emotion/react";

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
