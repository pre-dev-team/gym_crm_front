import { css } from "@emotion/react";

export const container = css`
    box-sizing: border-box;
    position: relative;
    width: 100%;
    height: auto;
    height: 250px;
    & > h3 {
        margin: 0;
        margin-bottom: 10px;
    }
    & > span {
        position: absolute;
        top: 20px;
        right: 0;
        cursor: pointer;
    }
    color: white;
    margin-bottom: 10px;
`;

export const checkContainer = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
`;

export const checkBox = css`
    font-size: 25px;
    margin-left: 3px;
    margin-top: 3px;
    transition: all ease-in-out 0.2s;
    cursor: pointer;
`;

export const textarea = (isShow) => css`
    resize: none;
    width: 100%;
    height: ${isShow ? "170px" : "50px"};
    transition: all ease-in-out 0.2s;
    overflow-y: auto;
    cursor: default;
    &::-webkit-scrollbar {
        color: aliceblue;
    }
`;
