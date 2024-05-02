import { css } from "@emotion/react";

export const layout = (isClose) => css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 370px;
    height: 400px;
    background-color: #494949;
    box-shadow: 10px 1px 1px 1px black;
    transition: all 0.5s ease;
    opacity: ${isClose ? 0 : 1};
`;

export const customButton = css`
    width: 200px;
    height: 30px;
    padding: 5px;
    font-size: 16px;
    letter-spacing: 2px;
    background-color: #c9c9c9;
    border: none;
    cursor: pointer;
    box-shadow: 1px 1px 1px 1px black;
    transition: all 0.4s;
    &:hover {
        box-shadow: inset 3px 1px 5px 1px black;
        transform: translateY(2px);
        cursor: pointer;
    }
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
    background-color: ${isSelect ? "#999999" : "#c9c9c9"};
    margin: 0px 3px;
    box-shadow: ${isSelect ? "inset 3px 1px 5px 1px" : "1px 1px 1px 1px"};
    transition: all 0.4s;
    transform: ${isSelect ? "translateY(2px)" : "translateY(0px)"};
    &:hover {
        box-shadow: inset 3px 1px 5px 1px black;
        transform: translateY(2px);
        cursor: pointer;
    }
    &:active {
        background-color: #999999;
    }
`;

export const buttonBox = css`
    width: 200px;
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > button {
        width: 150px;
        height: 30px;
        cursor: pointer;
        border: none;
        background-color: #c9c9c9;
        box-shadow: 1px 1px 1px 1px black;
        transition: all 0.4s;
        &:hover {
            box-shadow: inset 2px 1px 3px 1px black;
            transform: translateY(2px);
        }
        &:active {
            background-color: #999999;
        }
    }
    & > button:nth-of-type(1) {
        margin-bottom: 10px;
    }
`;
