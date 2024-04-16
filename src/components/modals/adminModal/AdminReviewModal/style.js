import { css } from "@emotion/react";

export const linkBox = css`
    width: 100%;
    height: 25%;
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
        width: 80%;
    }
`;

export const imgBox = css`
    width: 100%;
    height: 75%;
    border: 1px solid black;
    margin-bottom: 5px;
`;
