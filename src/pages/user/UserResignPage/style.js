import { css } from "@emotion/react";

export const layout = (agree) => css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px auto;
    border-collapse: collapse;
    padding: 10px;
    width: 100%;
    height: 90%;

    & > h1 {
        margin: 0;
        color: white;
    }

    & > button {
        width: 100%;
        height: 35px;
        font-size: 14px;
        cursor: pointer;
        background-color: transparent;
        color: #999999;
        box-shadow: ${agree ? "3px 5px 8px 3px hsla(0, 0%, 0%, 0.411)" : ""};
        transition: transform 0.3s, box-shadow 0.3s;
        &:hover {
            transform: ${agree ? "translateY(2px)" : ""};
        }
        &:active {
            box-shadow: inset 3px 5px 8px 3px hsla(0, 0%, 0%, 0.411);
        }
    }
`;
