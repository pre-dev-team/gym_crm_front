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
    align-items: center;
`;

export const reservationBox = css`
    box-sizing: border-box;
    width: 60%;
    height: 50%;
`;

export const listBox = css`
    box-sizing: border-box;
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
    height: 25px;
    width: 100%;
    border-bottom: 1px solid black;
`;
export const list = css`
    box-sizing: border-box;
    width: 100%;
    padding: 10px 10px;
    height: 290px;
    overflow-y: auto;
`;

export const graphbox = css`
    box-sizing: border-box;
    width: 40%;
    height: 50%;
`;
