import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 30px auto;
    border-collapse: collapse;
    padding: 10px;
    width: 100%;
    height: 90%;
    color: white;
`;

export const customButton = css`
    width: 200px;
    height: 30px;
    padding: 5px;
    font-size: 16px;
    letter-spacing: 2px;
    background-color: #eeeeee;
    border: none;
    cursor: pointer;
`;

export const infoBox = css``;

export const periodBox = (isSelect) => css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 350px;
    height: 240px;
    font-size: 12px;
    color: black;
`;

export const periodButton = (isSelect) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 40px;
    background-color: ${isSelect ? "#999999" : "white"};
    border: 1px solid black;
    margin: 0px 3px;
    &:hover {
        cursor: pointer;
    }
    &:active {
        background-color: #999999;
    }
`;
