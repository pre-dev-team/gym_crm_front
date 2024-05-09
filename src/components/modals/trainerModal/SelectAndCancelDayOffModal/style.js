import { css } from "@emotion/react";

export const btnWrapper = css`
    display: flex;
    justify-content: center;
`;

export const modalOpenBtn = css`
    box-sizing: border-box;
    border-collapse: collapse;
    height: 30px;
    width: 100%;
    border: 1px solid hsl(0, 0%, 80%);
    cursor: pointer;
`;

export const modalContainer = css`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #4d4d4d4b;
    z-index: 1;
`;

export const modalContent = css`
    background-color: white;
    width: 700px;
    height: 800px;
    padding: 15px;
`;

export const modalCloseBtn = css`
    cursor: pointer;
    float: right;
    margin-top: 20px;
    margin-left: auto;
`;

export const layout = css`
    margin: 0;
    width: 100%;
    height: 620px;
`;

export const tableBox = css`
    overflow: auto;
    position: relative;
    width: 100%;
    height: 200px;
    border: 1px solid black;
    margin-bottom: 10px;
`;

export const table = css`
    width: 100%;
    box-sizing: border-box;
`;

export const head = css`
    
`;

export const tr = css`
    font-size: 20px;
    position: sticky;
`;

export const btr = css`

    & > td {
        text-align: center;
        font-weight: 600;
        font-size: 16px;
    }
`;

export const body = css`
`;

export const searchTypeOption2 = {
    0 : "승인 대기 중",
    1 : "승인 완료",
    2 : "승인 반려",
};