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
        top: 0;
        right: 0;
        cursor: pointer;
    }
    color: white;
    margin-bottom: 10px;
`;
export const textarea = (isShow) => css`
    resize: none;
    width: 100%;
    height: ${isShow ? "200px" : "50px"};
    transition: all ease-in-out 0.2s;
    overflow-y: auto;
    cursor: default;
    &::-webkit-scrollbar {
        color: aliceblue;
    }
`;

export const checkBox = css`
    position: absolute;
    top: -2px;
    left: 100px;
    font-size: 25px;
    transition: all ease-in-out 0.2s;
    cursor: pointer;
`;
