import { css } from "@emotion/react";

export const btnWrapper = css`
    display: flex;
    justify-content: center;
`;

export const modalOpenBtn = css`
    cursor: pointer;
    margin-left: auto;
`;

export const modalContainer = css`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #4d4d4d4b;
    z-index: 1;
`;

export const modalContent = css`
    background-color: white;
    width: 700px;
    height: 800px;
    padding: 15px;
`;

export const modalCloseBtn = css`
    cursor: pointer;
    float: right;
    margin-top: 20px;
    margin-left: auto;
`;

export const routineLayout = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const routine = css`
    box-sizing: border-box;
    border: 1px solid black;
    width: 300px;
    height: 600px;
`;

export const right = css`
    font-size: 55px;
`;

export const routineBox = css`
    list-style-type: none;
`;
export const background = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
    background-color: #4d4d4d4b;
`;
export const layout = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 10px 25px;
    width: 70%;
    height: 80%;
    background-color: white;
`;

export const boxLayout = css`
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    margin: 10px;
`;

export const inLayout = css`
    display: flex;
    justify-content: space-around;
`;

export const routineSelectBox = css`
    box-sizing: border-box;
    width: 225px;
    height: 556px;
    border: 1px solid black;
`;
export const routineOption = css``;



export const selectBox = css`
    box-sizing: border-box;
    width: 225px;
    height: 556px;
    border: 1px solid black;
`;


export const iconBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const arrowRight = css`
    font-size: 66px;
    margin: 0px 20px 0px 20px;
`;
export const card = css`
    margin: 10px;
    border: 1px solid #dbdbdb;
    cursor: pointer;
`;

export const dragBox = css``;

export const submit =css`
    top: 0px;
`;
export const modalClose = css`
    position: absolute;
    right: 166px;
    bottom: 100px;
`;