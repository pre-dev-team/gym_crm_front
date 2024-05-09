import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height: 100%;
    font-size: 14px;
    overflow-y: auto;
`;

export const table = css`
    border-collapse: collapse;
    text-align: center;
    width: 100%;
    overflow: auto;
`;

export const head = css`
    & > th {
        border: 1px solid #939393;
        height: 28px;
    }

    & > th:nth-of-type(1) {
        border-left: none;
    }

    & > th:nth-of-type(3) {
        border-right: none;
    }
`;

export const membersBox = css`

    & > tr > td {
        height: 23px;
        border: 1px solid #939393;
    }

    & > tr > td:nth-of-type(1) {
        border-left: none;
    }

    & > tr > td:nth-of-type(3) {
        border-right: none;
    }


    & > tr > td:nth-of-type(2) {
        background-color: #dbdbdb;
    }

    & > tr > td:nth-of-type(3) {
        background-color: #dbdbdb;
    }

`;

export const memeberInfoButton = css`
    width: 100%;
    border: none;
    background-color: #dbdbdb;
    
    &:hover {
        background-color: #eeeeee;
    }
    cursor: pointer;
`;
