import { css } from "@emotion/react";

export const table = css`
    box-sizing: border-box;
    width: 100%;
`;

export const searchBox = css`
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 10%;
    width: 100%;
    z-index: 2;
`;
export const tableBox = css`
    position: relative;
    width: 100%;
    height: 100%;
`;
export const th = css`
    font-size: 14px;
    text-align: center;
    position: sticky;
    top: 30px;
    height: 20px;
    width: 100%;
    z-index: 2;
`;
export const tb = css`
    font-size: 14px;
    text-align: center;
    overflow-y: auto;
`;

export const searchButton = css`
    box-sizing: border-box;
    border: none;
    height: 30px;
    width: 100px;
`;

export const searchInput = css`
    box-sizing: border-box;
    border: none;
    height: 30px;
    width: 300px;
    margin-right: 10px;
    padding-left: 5px;
`;
