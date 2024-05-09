import { css } from "@emotion/react";

export const btnWrapper = css`
    display: flex;
    justify-content: center;
`;

export const modalOpenBtn = css`
    cursor: pointer;
    width: 100%;
    border: none;
    background-color: #dbdbdb;
    &:hover {
        background-color: #eeeeee;
    }
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
    height: 620px;
    width: 100%;
`;

export const test = css`
    box-sizing: border-box;
    border: 1px solid black;
    width: 100%;
    height: 300px;
    overflow: auto;
`;

export const table = css`
    width: 100%;
`;

export const head = css`
    text-align: center;
`;

export const tr = css`
    font-size: 20px;
`;

export const body = css`
    text-align: center;
    
    & > tr > td {
        font-size: 16px;
        font-weight: 600;
    }
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