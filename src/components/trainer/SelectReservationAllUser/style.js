import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    height: 300px;
`;

export const dateBox = css`
    display: flex;
    justify-content: space-between;
    height: 35px;
    padding: 5px;
    & > button {
        width: 50px;
        background-color: #dbdbdb;
        border: none;
    }
    border-bottom: 1px solid #dbdbdb;
`;

export const selectBox = css`
    height: 360px;
    overflow-y: auto;
`;

export const table = css`
    border-collapse: collapse;
    & th,
    td {
        border: 1px solid #dbdbdb;
    }
    & th:nth-of-type(1) {
        width: 120px;
    }
    & th:nth-of-type(2) {
        width: 140px;
    }
    & td {
        width: 80px;
        height: 20px;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
`;

export const customButton = css`
    width: 130px;
    height: 35px;
    padding: 5px;
    font-size: 16px;
    letter-spacing: 2px;
    background-color: transparent;
    border: 1px solid hsl(0, 0%, 80%);
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
    z-index: 5;
`;
