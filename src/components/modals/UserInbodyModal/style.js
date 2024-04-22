import { css } from "@emotion/react";

export const layout = (isOpen) => css`
    position: absolute;
    box-sizing: border-box;
    top: ${isOpen ? "50%" : "0"};
    left: ${isOpen ? "50%" : "0"};
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${isOpen ? "370px" : "0px"};
    height: ${isOpen ? "500px" : "0px"};
    background-color: #494949;
    box-shadow: 3px 1px 1px 1px black;
    transition: all 0.5s ease;
    opacity: ${isOpen ? 1 : 0};
    z-index: ${isOpen ? 99 : -2};
`;

export const tableBox = css`
    width: 100%;
    height: 20%;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 5px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #2f3542;
    }
    margin-bottom: 5px;
`;
export const table = css`
    width: 100%;
    text-align: center;
    color: #fafafa;

    & td > button:hover {
        cursor: pointer;
    }
`;
export const imgBox = css`
    box-sizing: border-box;
    width: 100%;
    height: 70%;
    padding: 20px;
    & > img {
        width: 170%;
        cursor: pointer;
    }
    overflow: auto;
    &::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #2f3542;
    }
`;

export const close = css`
    margin-top: 8px;
    width: 100px;
    height: 30px;
    cursor: pointer;
`;
