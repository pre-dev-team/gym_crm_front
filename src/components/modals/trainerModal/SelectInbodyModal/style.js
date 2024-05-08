import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height: 100%;
`;

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
    font-size: 16px;
    font-weight: 600;
`;

export const btr = css`

    & > td {
        text-align: center;
    }
`;

export const body = css`
    text-align: center;
`;

export const table2 = css`
    box-sizing: border-box;
    width: 100%;
`;