import { css } from '@emotion/react';

export const layout = css`
    display: flex;
    box-sizing: border-box;
    width: 300px;
    height: 140px; 
    border: 1px solid white;
    margin: 10px auto;
`;

export const trainerProfile = css`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    width: 150px;

`;

export const profileImg = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;

    & > img {
        width: 125%;
    }
`;

export const imgStyle = css`
    width: 100%;
    height: auto;
`;

export const trainerName = css`
   
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid white;
    padding: 5px 20px;
    margin-top: 3px;
`;

export const info = css`
    display: flex;
    flex-direction: column;
    width: calc(100% - 130px); /* 프로필 이미지 크기만큼을 제외한 나머지 너비 */
`;

export const ratings = css`
    display: flex;
    border-left: 1px solid white;
    border-bottom: 1px solid white;
    height: 50%;
`;

export const reviews = css`
    display: flex;
    border-left: 1px solid white;
    height: 50%;
`;

