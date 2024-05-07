import { css } from "@emotion/react";

export const container = css`
    position: relative;
    width: 100%;
    height: auto;
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
    height: ${isShow ? "160px" : "20px"};
    transition: all ease-in-out 0.2s;
`;

export const checkBox = css`
    position: absolute;
    top: -2px;
    left: 100px;
    font-size: 25px;
    cursor: pointer;
`;
