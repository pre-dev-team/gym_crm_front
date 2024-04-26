import { css } from "@emotion/react";
export const background = css`
    box-sizing: border-box;
    display: flex;
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
    flex-direction: column;
    align-items: center;
    padding: 25px;
    width: 70%;
    height: 80%;
    background-color: white;
`;

export const btnWrapper = css`
    display: flex;
    justify-content: center;
`;

export const modalOpenBtn = css`
    cursor: pointer;
    margin-left: auto;
`;

export const routineCardBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 240px;
    margin-top: 20px;
    border: #dbdbdb 2px solid;
    padding: 10px;
    & h4 {
        margin: 0;
    }
    & ul {
        padding: 5px;
    }
`;

export const routineCard = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    list-style: none;
    width: 200px;
    height: 100%;
    border: 2px solid #dbdbdb;
    padding: 5px;
    margin-right: 5px;
    cursor: grab;
    &:active:hover {
        cursor: grabbing;
    }
`;

export const workoutImgBox = css`
    border: 1px solid black;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    margin-bottom: 10px;
    position: relative;
    & > img {
        width: 100%;
        overflow: hidden;
    }
    & > h1 {
        position: absolute;
        font-size: 70px;
        left: 50%;
        transform: translate(-50%, -65%);
        color: #dbdbdb88;
    }
`;
export const routineInfoBox = css`
    display: flex;
    flex-direction: column;
`;
export const catrgoryBox = css`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 20px;
    margin-bottom: 5px;
    font-size: 12px;
`;
export const routineDetailBox = css`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

export const modalClose = css`
    position: absolute;
    right: 166px;
    bottom: 100px;
`;
