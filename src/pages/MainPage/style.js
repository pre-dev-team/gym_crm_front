import { css } from "@emotion/react";

export const background = css`
    width: 100%;
    height: 680px;
    position: relative;
    overflow-y: auto;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const imgBox = css`
    position: absolute;
    height: 100%;
    z-index: 1;
    & > img {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        opacity: 0.2;
    }
`;

export const box1 = css`
    @font-face {
        font-family: "establishRetrosansOTF";
        src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2112@1.0/establishRetrosansOTF.woff")
            format("woff");
        font-weight: normal;
        font-style: normal;
    }
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 680px;
    align-items: center;
    color: white;
    font-size: 25px;
    font-family: "establishRetrosansOTF";
    text-align: center;
`;

export const text1 = css`
    padding-top: 100px;
    width: 80%;
    height: 130px;
    font-size: 50px;
    margin-top: 20px;
    font-weight: 500;
`;
export const text2 = css`
    margin-top: 200px;
    width: 80%;
    height: 100px;
    text-align: left;
    font-size: 28px;
    font-weight: 500;
`;
export const text3 = css`
    width: 100%;
    height: 100px;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
`;
export const logo = css`
    width: 100%;
    height: 240px;
    & > img {
        width: 90%;
    }
`;
export const text4 = css`
    width: 100%;
    font-size: 36px;
    font-weight: 500;
`;

export const box2 = css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 680px;
    background-color: #343435;
`;

export const box3 = css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 680px;
    background-color: #515152;
`;
