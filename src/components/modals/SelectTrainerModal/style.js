import { css } from "@emotion/react";

export const layout = (isSelect) => css`
    position: absolute;
    top: 20%;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 400px;
    background-color: white;
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
export const periodBox = css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 400px;
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
