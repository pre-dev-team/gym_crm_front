import { css } from "@emotion/react";

export const btnWrapper = css`
    display: flex;
    justify-content: center;
`;

export const modalOpenBtn = css`
    cursor: pointer;
    margin-left: auto;
`;

export const modalContainer = css`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #4d4d4d4b;
    z-index: 1;
`;

export const modalContent = css`
    background-color: white;
    width: 700px;
    height: 800px;
    padding: 15px;

    & > h1 {
        margin-bottom: 0px;
    }
`;

export const modalCloseBtn = css`
    cursor: pointer;
    float: right;
    margin-bottom: 10px;
    margin-left: auto;
`;

export const layout = css`
    margin: auto;
    height: 100%;
    width: 100%;
    overflow: auto;
`;

export const test = css`
    box-sizing: border-box;
    border: 1px solid black;
    width: 100%;
    height: 300px;
    overflow: auto;
`;

export const table = css`
    box-sizing: border-box;
    width: 100%;
`;

export const head = css`
    text-align: center;
`;

export const tr = css`
    font-size: 20px;
`;

export const btr = css`

    & > td {
        text-align: center;
    }
`;

export const body = css`
    height: 200px;
    text-align: center;
`;

export const test2 = css`
    box-sizing: border-box;
    border: 1px solid black;
    border-top: none;
    width: 100%;
    height: 300px;
`;

export const table2 = css`
    box-sizing: border-box;
    width: 100%;
`;

export const h1 = css`
    text-align: center;
`;