import { css } from "@emotion/react";

export const container = css`
    overflow: auto;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-size: 10px;
`;

export const title = css`
    text-align: center;
    margin-bottom: 20px;
    font-size: 24px;
`;

export const table = css`
    overflow: auto;
    flex-direction: column;
    width: 100%;
    font-size: 18px;
`;

export const row = css`
    display: flex;
    border: 1px solid #ccc;
    margin-bottom: 10px;
`;

export const cell = css`
    flex: 1;
    padding: 10px;
    font-weight: 800;
`;

export const img = css`
    width: 70x;
    height: 70px;
    border-radius: 50%;
`;

export const trainerName = css`
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 20px;
`;

export const ratings = css`
    margin-bottom: 5px;
    color: #666;
`;

export const reviews = css`
    color: #444;
`;
