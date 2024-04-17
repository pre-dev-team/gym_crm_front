/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

// Inbody 컴포넌트의 스타일 정의
export const layout = css`
    margin: auto;
    width: 50%; /* 원하는 너비로 조정하세요 */
`;

export const inbodyForm = css`
    display: flex;
    flex-direction: column;

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
