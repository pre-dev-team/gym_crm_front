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
    background: #dbdbdb;
`;

export const modalContent = css`
    background-color: #ffffff;
    width: 700px;
    height: 800px;
    padding: 15px;
`;

export const modalCloseBtn = css`
    cursor: pointer;
    float: right;
    margin-top: 20px;
    margin-left: auto;
`;

export const routineLayout = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const routine = css`
    box-sizing: border-box;
    border: 1px solid black;
    width: 300px;
    height: 600px;
`;

export const right = css`
    font-size: 55px;
`;

export const routineBox = css`
    list-style-type: none;
`;