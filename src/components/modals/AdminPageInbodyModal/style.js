import { css } from "@emotion/react";

export const layout = css`
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
export const container = css`
    box-sizing: border-box;
    width: 65%;
    height: 60%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
`;
export const tableBox = css`
    width: 100%;
    height: 80px;
    text-align: center;
    overflow-y: auto;
    margin-bottom: 10px;
    & th,
    & td {
        height: 20px;
        border: 1px solid black;
    }

    & th:nth-of-type(1),
    & td:nth-of-type(1) {
        width: 80px;
    }
    & th:nth-of-type(2),
    & td:nth-of-type(2) {
        width: 330px;
    }
    & th:nth-of-type(3),
    & td:nth-of-type(3) {
        width: 190px;
    }
`;
export const table = css`
    border-collapse: collapse;
    margin: 0px auto;
`;

export const imgBox = css`
    width: 100%;
    height: 330px;
    overflow-y: auto;
    margin-bottom: 10px;
    & > img {
        width: 100%;
        overflow-y: auto;
    }
`;
