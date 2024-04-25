import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
`;

export const firstBox = css`
    box-sizing: border-box;
    width: 100%;
    height: 50%;
    padding: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const secoundBox = css`
    box-sizing: border-box;
    width: 100%;
    height: 50%;
    padding: 5px;
    display: flex;
    justify-content: space-around;
    padding-top: 20px;
`;

export const reservationBox = css`
    box-sizing: border-box;
    width: 60%;
    height: 50%;
`;

export const listBox = css`
    box-sizing: border-box;
    position: relative;
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const listName = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 30px;
    border-bottom: 1px solid black;
    & > button {
        position: absolute;
        right: 0;
        top: 0px;
    }
`;

export const list = css`
    box-sizing: border-box;
    width: 100%;
    padding: 10px 10px;
    height: 290px;
`;

export const graphbox = css`
    box-sizing: border-box;
    width: 40%;
    height: 50%;
`;
