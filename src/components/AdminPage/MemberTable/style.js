import { css } from "@emotion/react";

export const table = css`
    box-sizing: border-box;
    width: 100%;
`;

export const searchBox = css`
    display: flex;
    justify-content: space-between;
    height: 35px;
    width: 100%;
`;
export const tableBox = css`
    position: relative;
    width: 100%;
    height: 250px;
    overflow: auto;
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
export const th = css`
    font-size: 14px;
    position: sticky;
    top: 0;
    text-align: center;
    width: 100%;
    height: 20px;
    background-color: #ededed;
`;
export const tb = css`
    font-size: 14px;
    text-align: center;
`;

export const searchButton = css`
    box-sizing: border-box;
    border: none;
    height: 30px;
    width: 100px;
    cursor: pointer;
`;

export const searchInput = css`
    box-sizing: border-box;
    border: none;
    height: 30px;
    width: 300px;
    margin-right: 10px;
    padding-left: 5px;
`;
