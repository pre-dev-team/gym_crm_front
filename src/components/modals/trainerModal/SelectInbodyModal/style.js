import { css } from "@emotion/react";

export const test = css`
    box-sizing: border-box;
    width: 100%;
    height: 300px;
    overflow: auto;
`;

export const head = css`
    text-align: center;
`;

export const tr = css`
    font-size: 20px;
`;

export const tr2 = css`
    text-align: center;
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

export const table2 = css`
    box-sizing: border-box;
    width: 100%;
`;