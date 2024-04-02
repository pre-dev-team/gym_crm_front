import { css } from '@emotion/react';

export const background = css`
    position: fixed;
    top: 0;
    left: 0;
    z-index: -99;
    width: 100%;
    height: 100%;
    background-color: #808080;
`

export const layout = css`
    box-sizing: border-box;
    position: relative;
    display: flex;
    margin: 30px auto;
    border: 2px solid #fafafa;
    padding: 10px;
    width: 425px;
    height: 800px;
    overflow: hidden;
    background-color: #262627;
`

export const container = css`
    height: 720px;
    overflow-y: auto;
    &::-webkit-scrollbar {
        display: none;
    }
`