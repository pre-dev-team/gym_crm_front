import { css } from "@emotion/react";

export const container = css`
    width: 95%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    transform: tra;
`;

export const uncheckedBox = css`
    width: 100%;
    height: 45%;
    border: 1px solid black;
    margin-bottom: 10px;
    overflow-y: auto;
`;
export const uncheckedTable = css`
    & th,
    & td {
        width: 120px;
    }
    & th:nth-of-type(1),
    & td:nth-of-type(1) {
        width: 70px;
    }
    & th:nth-of-type(3),
    & td:nth-of-type(3) {
        width: 70px;
    }
`;

export const checkedBox = css`
    width: 100%;
    height: 45%;
    border: 1px solid black;
    overflow-y: auto;
`;

export const checkedTable = css`
    & th,
    & td {
        width: 120px;
    }
`;
