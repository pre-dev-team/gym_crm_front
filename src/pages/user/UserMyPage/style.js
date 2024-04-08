import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 30px auto;
    border-collapse: collapse;
    padding: 10px;
    width: 100%;
    height: 90%;
`;

export const infoBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 50%;
    border: 1px solid white;
    margin-bottom: 10px;
`;

export const info = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 100%;
`;

export const inbodyBox = css`
    box-sizing: border-box;
    width: 40%;
    height: 100%;
`;

export const reservationBox = css`
    box-sizing: border-box;
    display: flex;
    width: 100%;
    height: 50%;
    border: 1px solid white;
`;
