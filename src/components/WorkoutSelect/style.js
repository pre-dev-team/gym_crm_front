import { css } from "@emotion/react";

export const selectStyle = {
    control: (baseStyles) => ({
        ...baseStyles,
        borderRadius: "0px",
        fontSize: "14px",
        outline: "none",
        padding: "none",
        boxShadow: "none",
        width: "270px",
    }),
};

export const initialWorkoutOption = {
    weight: 0,
    count: 0,
    set: 0,
    category: {
        value: 0,
        label: "",
    },
    workout: {
        value: 0,
        label: "",
    },
};

export const initialSelectNameState = {
    category: false,
    workout: false,
    weight: false,
    count: false,
    set: false,
};

export const selectBox = css`
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    margin-bottom: 20px;
`;

export const cards = css`
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: space-around;
`;

export const inputCard = css`
    box-sizing: border-box;
    width: 180px;
    height: 150px;
    padding: 15px;

    & > input {
        box-sizing: border-box;
        width: 150px;
        height: 25px;
        margin-bottom: 5px;
        text-align: center;
    }
`;

export const cardTitle = css`
    position: relative;
    & > h3 {
        margin: 0px auto;
        margin-bottom: 10px;
    }
    & > button {
        position: absolute;
        right: 0;
        top: 0;
        cursor: pointer;
    }
`;

export const buttonBox = css`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    & > button {
        cursor: pointer;
        width: 150px;
        height: 25px;
        margin-bottom: 3px;
    }
`;

export const confirmBox = css`
    display: flex;
    width: 600px;
    height: 25px;
    justify-content: center;

    & > button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        width: 100%;
        cursor: pointer;
        &:hover {
            background-color: #dbdbdb;
        }
        &:active {
            background-color: #eeeeee;
        }
    }
`;
