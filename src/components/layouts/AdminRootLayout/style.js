import { css } from "@emotion/react";

export const background = css`
    position: fixed;
    top: 0;
    left: 0;
    z-index: -99;
    width: 100%;
    height: 100%;
    background-color: #dbdbdb;
`;

export const layout = css`
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 30px auto;
    padding: 10px;
    width: 1024px;
    height: 800px;
    overflow: hidden;
    background-color: #ededed;
`;

export const header = css`
    font-size: 14px;
`;
export const logoutBox = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 100px;
    height: 25px;
    cursor: pointer;
`;

export const container = css`
    width: 100%;
    height: 680px;
    margin-top: 40px;
    overflow-y: auto;
    &::-webkit-scrollbar {
        display: none;
    }
`;
