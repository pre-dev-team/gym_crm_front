import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px auto;
    border-collapse: collapse;
    padding: 10px;
    width: 100%;
    height: 90%;
`;

export const infoBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 50%;
    margin-bottom: 10px;
    color: white;
`;

export const info = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 80%;
`;

export const names = css`
    & > h2 {
        margin: 0;
    }
    margin-bottom: 10px;
`;
export const contact = css`
    & > div {
        font-size: 12px;
    }
    & > h2 {
        margin: 0;
    }
    margin-bottom: 10px;
`;
export const buttonBox = css`
    padding: 10px 0px;
    & > button {
        width: 100%;
        height: 30px;
        background-color: #ededed;
        border: none;
        margin-bottom: 10px;
        cursor: pointer;
    }
`;
export const listBox = css`
    box-sizing: border-box;
    width: 100%;
    height: 220px;
    border: 1px solid white;
    overflow-y: auto;
    &::-webkit-scrollbar {
    }
`;

export const reservationBox = css`
    box-sizing: border-box;
    display: flex;
    width: 100%;
    height: 50%;
    border-top: 1px solid white;
`;
