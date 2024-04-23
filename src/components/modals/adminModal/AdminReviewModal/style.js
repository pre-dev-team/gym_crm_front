import { css } from "@emotion/react";

export const container = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

export const listBox = css`
    width: 100%;
    height: 40%;
    overflow-y: auto;
    margin-bottom: 5px;
    border-collapse: collapse;
    border: 1px solid black;
`;

export const table = css`
    width: 100%;
    text-align: center;
    overflow-y: auto;

    & th,
    & td {
        height: 20px;
        padding: 0;
    }

    & th:nth-of-type(1),
    & td:nth-of-type(1) {
        width: 20%;
    }
    & th:nth-of-type(2),
    & td:nth-of-type(2) {
        width: 30%;
    }
    & th:nth-of-type(2),
    & td:nth-of-type(2) {
        width: 50%;
    }

    & button {
        cursor: pointer;
    }
`;

export const reviewDetailBox = css`
    width: 100%;
    height: 50%;
    border: 1px solid black;
    margin-bottom: 5px;
`;

export const contentTable = css`
    width: 100%;
    text-align: center;
    overflow-y: auto;
`;

export const thead = css`
    width: 100%;
    & th {
        width: 20%;
    }
    & td {
        width: 70%;
    }
`;
export const tbody = css`
    & th {
        width: 20%;
        border-bottom: 1px solid black;
        padding-top: 10px;
    }
    & td {
        text-align: left;
        padding-top: 5px;
        width: 70%;
    }
`;
