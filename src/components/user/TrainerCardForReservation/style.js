import { css } from "@emotion/react";

export const layout = css`
    position: relative;
    box-sizing: border-box;
    display: flex;
    margin: 0px auto;
    box-shadow: 3px 5px 8px 3px hsla(0, 0%, 0%, 1);
    width: 100%;
    height: 110px;
    margin-bottom: 15px;
    transition: transform 0.3s, box-shadow 0.3s;
    background-color: #dbdbdb;
    &:hover {
        cursor: pointer;
        box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.5);
    }
    &:hover > div:nth-of-type(2) > div:nth-of-type(1) {
        height: 65%;
    }
`;

export const photoBox = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100px;
    overflow: hidden;
    & > img {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
`;

export const letterBox = css`
    display: flex;
    flex-direction: column;
    & > span {
        font-weight: 700;
        font-size: 20px;
        width: 280px;
        text-align: center;
        position: absolute;
        bottom: 10px;
        z-index: 1;
    }
`;

export const infoBox = css`
    position: absolute;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #999999;
    width: 280px;
    height: 100%;
    & > h1 {
        font-size: 32px;
        margin: 0;
    }
    transition: 0.3s all;
    z-index: 2;
`;
