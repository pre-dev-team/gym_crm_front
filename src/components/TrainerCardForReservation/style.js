import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px auto;
    box-shadow: 3px 1px 5px 1px black;
    width: 250px;
    height: 85px;
    background-color: white;
    padding: 15px;
    margin-bottom: 15px;
`;

export const photoBox = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    margin-right: 10px;
    height: 80%;
    & > img {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        border-radius: 50%;
    }
`;
export const infoBox = css`
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-left: 1px solid black;
    width: 165px;
    height: 90%;
`;
export const nameBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
`;
export const buttonBox = css`
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    & > button {
    }
`;
