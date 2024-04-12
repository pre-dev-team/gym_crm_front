import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 560px;
    height: 420px;
    padding: 20px;
`;

export const scheduleDiv = css`
    display: flex;
    justify-content: space-around;
`;

export const container = css`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
`;


export const tableLayout = css`
    position: relative;
    width: 200px; 
    height: 144px;
    border-collapse: collapse;
    width: max-content; 
    border: 1px solid black;
    margin: 10px;
`;

export const todayBox = css`
   box-sizing: border-box;
   list-style-type: none;
`;

export const tomorrowBox = css`
    list-style-type: none;
`;



