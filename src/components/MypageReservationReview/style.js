import { css } from "@emotion/react";

export const reservationBoard = css`
    box-sizing: border-box;
    display: flex;
    width: 100%;
`;

export const tableBox = css`
    width: 100%;
    height: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > h2 {
        width: 80%;
        margin: 0;
        margin-bottom: 10px;
    }
    color: #ededed;
    overflow-y: auto;
    &::-webkit-scrollbar {
        display: none;
    }
`;
export const table = css`
    text-align: center;
    width: 100%;
`;
