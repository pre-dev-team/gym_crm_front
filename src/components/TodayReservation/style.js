import { css } from "@emotion/react";

export const layout = css`
    margin-top: 15px;
`;

export const todayContainer = css`
    box-sizing: border-box;
    margin: 5px;
    border: 1px solid #dbdbdb;
    width: 250px;
    height: 250px;
    overflow: scroll;
`;

export const tomorrowContainer = css`
    box-sizing: border-box;
    margin: 5px;
    border: 1px solid #dbdbdb;
    width: 250px;
    height: 250px;
    overflow: scroll;
`;

export const scheduleDiv = css`
    display: flex;
    justify-content: space-around;
`;

export const schedule = css`
    font-size: 16px;
    font-weight: 600;
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
   padding: 5px;
   list-style-type: none;

`;

export const tomorrowBox = css`
    padding: 0px;
    list-style-type: none;
`;



