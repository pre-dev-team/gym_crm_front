import { css } from "@emotion/react";

export const tableBox = css`
    box-sizing: border-box;
    position: relative;
    width: 100%;
    height: 200px;
    overflow-y: auto;
    &::-webkit-scrollbar {
        box-sizing: border-box;
        width: 10px;
        height: 10px;
        background-color: #fdfdfd;
    }

    &::-webkit-scrollbar-thumb {
        box-sizing: border-box;
        border: 1px solid #fafafa;
        background-color: #dbdbdb;
    }
`;

export const table = css`
    box-sizing: border-box;
    width: 100%;
`;

export const th = css`
    font-size: 14px;
    text-align: center;
    position: sticky;
    top: 0;
    background-color: #ededed;
`;

export const tb = css`
    font-size: 14px;
    text-align: center;
`;
