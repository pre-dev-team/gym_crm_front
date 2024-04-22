import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    box-shadow: 3px 1px 5px 1px black;
    width: 100%;
    height: 40px;
    background-color: #262627;
    z-index: 99;
    padding: 0px 10px;
`;

export const buttonBox = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;

    width: 30px;
    height: 30px;
    font-size: 25px;
    color: white;

    &:nth-of-type(1) {
        cursor: pointer;
    }

    & > img {
        width: 150%;
    }

    &:nth-of-type(3) {
        font-size: 20px;
        cursor: pointer;
    }
`;
