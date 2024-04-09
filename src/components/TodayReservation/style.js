import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0px 50px;
    width: 100%;
    height: 60px;
    background-color: #262627;
    z-index: 99;
    box-shadow: 3px 5px 10px 3px black;
`;

export const buttonBox = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: white;
    width: 80px;
    font-size: 18px;
    & > span {
        font-size: 12px;
    }
`;
