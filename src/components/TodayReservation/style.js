import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 14px;
    overflow-y: auto;
`;

export const table = css`
    border-collapse: collapse;
    text-align: center;
`;

export const head = css`
    & th {
        border: 1px solid #939393;
        height: 28px;
    }
`;

export const body = css`
    & td {
        height: 23px;
        border: 1px solid #939393;
    }
    & td:nth-of-type(1) {
        width: 115px;
    }
    & td:nth-of-type(2),
    & td:nth-of-type(5) {
        width: 80px;
    }
    & td:nth-of-type(3),
    & td:nth-of-type(4),
    & td:nth-of-type(6) {
        width: 80px;
    }
    & td:nth-of-type(7) {
        width: 80px;
    }
    & > tr > td > button {
        border: none;
        width: 80px;
        height: 20px;
        background-color: #dbdbdb;
        cursor: pointer;
        &:hover {
            background-color: #cccccc;
        }
    }
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
