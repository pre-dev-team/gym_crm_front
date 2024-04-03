import { css } from '@emotion/react';

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 30px auto;
    border: 1px solid #ffffff;
    padding: 10px;
    width: 100%;
    height: 90%;
    background-color: transparent;

    & > h1 {
        margin: 30px 0px;
        color: #ffffff;
    }

    & > button {
        width: 50px;
    }
`

export const inputBox = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


`

export const buttonBox = css`
    margin-top: 10px;
    & > button {
        width: 70px;
        background-color: white;
        border: none;
        font-size: 14px;
        cursor: pointer;
        &:hover{
            background-color: #eeeeee;
        }
        &:active {
            background-color: #999999;
        }
    }
`