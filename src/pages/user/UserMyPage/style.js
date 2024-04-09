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
    align-items: center;
    flex-direction: column;
    width: 45%;
    height: 100%;
    & > h1 {
        padding: 10px;
        border-bottom: 1px solid white;
        margin: 0;
        margin-bottom: 10px;
        font-size: 24px;
    }
`;

export const inbodyBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 45%;
    height: 100%;
    & > h1 {
        padding: 10px;
        border-bottom: 1px solid white;
        margin: 0;
        margin-bottom: 10px;
        font-size: 24px;
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

export const inbodyDateBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid white;
    width: 100%;
    margin-bottom: 5px;
    & ul {
        padding: 0;
    }
    & li {
        list-style-type: none;
        font-size: 14px;
    }
    & a {
        text-decoration: none;
        color: inherit;
    }
`;
export const reservationBox = css`
    box-sizing: border-box;
    display: flex;
    width: 100%;
    height: 50%;
    border: 1px solid white;
`;
