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

export const trainerBox = css`
    width: 100%;
    height: 500px;
    box-shadow: 3px 5px 5px 3px black;
    overflow-y: scroll;
    padding: 20px 0px;
    &::-webkit-scrollbar {
        width: 5px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #2f3542;
    }
`;
