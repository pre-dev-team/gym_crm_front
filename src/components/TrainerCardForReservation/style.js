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
    background-color: #ff9900;
    padding: 15px;
    margin-bottom: 15px;
    transition: transform 0.3s, box-shadow 0.3s;
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
    width: 80px;
    margin-right: 10px;
    height: 80%;

    & > img {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 70px;
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
    width: 165px;
    height: 90%;
`;
