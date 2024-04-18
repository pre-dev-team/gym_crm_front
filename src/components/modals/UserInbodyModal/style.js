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
    height: 30%;
`;
export const table = css``;
export const imgBox = css`
    width: 100%;
    height: 70%;
`;
