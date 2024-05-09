import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 14px;
    overflow-y: auto;
`;

export const table = css`
    border-collapse: collapse;
    text-align: center;
`;

export const head = css`
    & th {
        border: 1px solid #939393;
        height: 28px;
    }
`;

export const body = css`
    & td {
        height: 23px;
        border: 1px solid #939393;
    }
    & td:nth-of-type(1) {
        width: 115px;
    }
    & td:nth-of-type(2),
    & td:nth-of-type(5) {
        width: 80px;
    }
    & td:nth-of-type(3),
    & td:nth-of-type(4),
    & td:nth-of-type(6) {
        width: 80px;
    }
    & td:nth-of-type(7) {
        width: 80px;
    }
    & > tr > td > button {
        border: none;
        width: 80px;
        height: 20px;
        background-color: #a5c9ff;
        cursor: pointer;
        &:hover {
            background-color: #65a2ff;
        }
    }
`;

export const tr = (isReservedTimeToday, isReservedTimeTomorrow) => css`
    & td:nth-of-type(2),
    & td:nth-of-type(3),
    & td:nth-of-type(4) {
        background-color: ${isReservedTimeToday ? "#A5C9FF" : "none"};
    }
    & td:nth-of-type(5),
    & td:nth-of-type(6),
    & td:nth-of-type(7) {
        background-color: ${isReservedTimeTomorrow ? "#A5C9FF" : "none"};
    }
`;