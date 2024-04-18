import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    margin: 20px 10px;
    border: 1px solid black;
    height: 400px;
`;

export const selectBox = css`
   height: 400px;
   overflow-y: auto;

`;

export const reservationList = css`
    list-style-type: none;
    overflow: auto;
    border: 1px solid #dbdbdb;
    padding: 15px;
    height: 200px;

    & > li > p {
        margin: 0px;
        padding: 5px;
    }

    & > li > span {
        padding: 5px;
    }
`;

export const customButton = css`
    width: 130px;
    height: 35px;
    padding: 5px;
    font-size: 16px;
    letter-spacing: 2px;
    background-color: transparent;
    border: 1px solid hsl(0, 0%, 80%);
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
`;

