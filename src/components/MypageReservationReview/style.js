import { css } from "@emotion/react";

export const reservationBoard = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    width: 100%;
`;

export const reservationCard = css`
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
`;
export const reservationList = css`
    width: 80%;
    color: white;
    & ul {
        height: 70px;
        padding: 5px;
        position: relative;
        margin-bottom: 10px;
        border: 1px solid white;
    }
    & li {
        list-style-type: none;
        font-size: 14px;
    }
    & > ul > button {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 80px;
        font-size: 12px;
    }
    overflow-y: auto;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const inbodyDateBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid white;
    width: 100%;
    margin-bottom: 5px;
`;
