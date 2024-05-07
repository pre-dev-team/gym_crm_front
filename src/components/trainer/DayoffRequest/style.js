import { css } from "@emotion/react";

export const layout = css`
    margin: 0;
`;

export const dayBox = css`
    margin: 5px;
`;

export const customButton = css`
    width: 340px;
    height: 35px;
    padding: 5px;
    font-size: 16px;
    letter-spacing: 2px;
    background-color: transparent;
    border: 1px solid hsl(0, 0%, 80%);
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
`;

export const selectBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const selectStyle2 = {
    control: (baseStyles, state) => ({
        ...baseStyles,
        borderRadius: "0px",
        fontSize: "14px",
        outline: "none",
        padding: "none",
        boxShadow: "none",
        width: "150px",
        margin: "10px"
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

export const searchButton = css`
    box-sizing: border-box;
    border-collapse: collapse;
    height: 30px;
    width: 100%;
    border: 1px solid hsl(0, 0%, 80%);
    cursor: pointer;
    margin-bottom: 5px;
`;

export const searchTypeOption1 = [
    { value: 1, label: "10:00" },
    { value: 2, label: "11:00" },
    { value: 3, label: "12:00" },
    { value: 4, label: "13:00" },
    { value: 5, label: "14:00" },
    { value: 6, label: "15:00" },
    { value: 7, label: "16:00" },
    { value: 8, label: "17:00" },
    { value: 9, label: "18:00" },
    { value: 10, label: "19:00" },
    { value: 11, label: "20:00" }
];

export const searchTypeOption2 = [
    { value: 1, label: "11:00" },
    { value: 2, label: "12:00" },
    { value: 3, label: "13:00" },
    { value: 4, label: "14:00" },
    { value: 5, label: "15:00" },
    { value: 6, label: "16:00" },
    { value: 7, label: "17:00" },
    { value: 8, label: "18:00" },
    { value: 9, label: "19:00" },
    { value: 10, label: "20:00" },
    { value: 11, label: "21:00" }
];