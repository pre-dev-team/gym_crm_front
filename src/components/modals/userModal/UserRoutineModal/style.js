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

export const routineCardBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90%;
    padding: 10px;
`;

export const routineCard = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 140px;
    box-shadow: 1px 1px 1px 1px;
    background-color: #dbdbdb;
    margin-bottom: 7px;
`;
export const indexBox = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    & > h1 {
        margin: 0;
        font-size: 18px;
    }
    margin-bottom: 5px;
`;
export const routineInfoBox = css`
    display: flex;
    justify-content: center;
    height: 100px;
`;
export const routineImgBox = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
    & > img {
        height: 100%;
    }
`;
export const infoTableBox = css`
    display: flex;
    align-items: center;
    width: 220px;
    height: 100%;
`;
export const table = css`
    text-align: center;
    font-size: 14px;
    & td:nth-of-type(1) {
        width: 60px;
    }
    & td:nth-of-type(2) {
        width: 160px;
    }
`;

export const close = css`
    margin-top: 8px;
    width: 100px;
    height: 30px;
    cursor: pointer;
`;
