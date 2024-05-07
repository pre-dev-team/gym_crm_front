import { css } from "@emotion/react";

export const layout = (agreed) => css`
    box-sizing: border-box;
    padding: 20px;
    background-color: transparent;
    width: 100%;
    height: 680px;
    box-shadow: 2px 2px 2px 4px rgba(0, 0, 0, 0.1);
    color: white;

    & > button {
        width: 100%;
        height: 35px;
        font-size: 14px;
        cursor: pointer;
        background-color: transparent;
        color: #999999;
        box-shadow: ${agreed ? "3px 5px 8px 3px hsla(0, 0%, 0%, 0.411)" : ""};
        transition: transform 0.3s, box-shadow 0.3s;
        &:hover {
            transform: ${agreed ? "translateY(2px)" : ""};
        }
        &:active {
            box-shadow: inset 3px 5px 8px 3px hsla(0, 0%, 0%, 0.411);
        }
    }
`;
