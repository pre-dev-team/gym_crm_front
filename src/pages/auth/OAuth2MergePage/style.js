import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    height: 100%;
    padding: 20px;
    color: white;
    white-space: pre-line;
`;

export const choiceBox = css`
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 50%;
    color: white;
    margin-bottom: 20px;
    & > h1 {
        margin: 0;
        margin-left: 10px;
        margin-bottom: 20px;
    }
    & > button {
        width: 95%;
        height: 40px;
        cursor: pointer;
        margin: 20px auto;
        font-size: 18px;
        background-color: transparent;
        color: #999999;
        transition: transform 0.3s, box-shadow 0.3s;
        cursor: pointer;
        &:hover {
            transform: translateY(2px);
        }
        &:active {
            box-shadow: inset 3px 5px 8px 3px hsla(0, 0%, 0%, 0.411);
        }
    }
`;
