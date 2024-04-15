import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    margin: 20px 0px;
    border: 1px solid black;
`;

export const reservationList = css`
    list-style-type: none;
    overflow: auto;
    padding: 15px;
    height: 500px;

    & > li > p {
        margin: 0px;
        padding: 5px;
    }

    & > li > span {
        padding: 5px;
    }
`;

