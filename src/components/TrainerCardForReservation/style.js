import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px auto;
    box-shadow: 3px 5px 8px 3px hsla(0, 0%, 0%, 1);
    width: 220px;
    height: 85px;
    margin-bottom: 15px;
    transition: transform 0.3s, box-shadow 0.3s;
    background-color: #dbdbdb;
    &:hover {
        cursor: pointer;
        transform: translateY(2px);
        box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.5);
    }
`;

export const photoBox = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    overflow: hidden;
    border-radius: 50%;
    margin-left: 10px;
    margin-right: 10px;

    & > img {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
`;
export const infoBox = css`
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #999999;
    width: 165px;
    height: 100%;
    & > h1 {
        font-size: 32px;
        margin: 0;
    }
`;
