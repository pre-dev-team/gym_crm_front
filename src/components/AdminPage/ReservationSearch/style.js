import { css } from "@emotion/react";

export const dateSelectBox = css`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const customButton = css`
    width: 275px;
    height: 35px;
    padding: 5px;
    font-size: 16px;
    letter-spacing: 2px;
    background-color: transparent;
    border: 1px solid hsl(0, 0%, 80%);
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
`;
export const selectStyle2 = {
    control: (baseStyles, state) => ({
        ...baseStyles,
        borderRadius: "0px",
        fontSize: "14px",
        outline: "none",
        padding: "none",
        boxShadow: "none",
        width: "275px",
    }),
};

export const selectAndNameInputBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 38px;
`;

export const nameInput = css`
    box-sizing: border-box;
    width: 220px;
    height: 38px;
    outline: none;
    border: 1px solid hsl(0, 0%, 80%);
    padding: 2px 5px;
    font-size: 14px;
`;

export const searchButton = css`
    box-sizing: border-box;
    border-collapse: collapse;
    height: 38px;
    width: 55px;
    border: 1px solid hsl(0, 0%, 80%);
    border-left: none;
`;

export const searchTypeOption = [
    { value: 1, label: "회원이름으로 검색" },
    { value: 2, label: "트레이너이름으로 검색" },
];
