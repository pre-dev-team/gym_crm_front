/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

// Inbody 컴포넌트의 스타일 정의
export const layout = css`
    background-color: #ededed;
    display: flex;
    position: absolute;
    margin: auto;
    padding: 10px;
    width: 300px; /* 원하는 너비로 조정하세요 */
    height: 300px;
    overflow: hidden;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const inbodyForm = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0px auto;
    & > label {
        margin-bottom: 5px;
    }

    & > input {
        margin-bottom: 10px;
        padding: 5px;
        border: 1px solid #ccc;
        border-radius: 3px;
    }

    & > button {
        padding: 8px 15px;
        font-size: 16px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 3px;
        cursor: pointer;
    }
`;

export const customButton = css`
    margin-top: 10px;
`;
