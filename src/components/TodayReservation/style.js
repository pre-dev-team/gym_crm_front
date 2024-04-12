import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    border: 1px solid #dbdbdb;
    width: 250px;
    height: 250px;
    overflow: scroll;
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


