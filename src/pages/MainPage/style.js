import { css } from '@emotion/react';

export const test = css`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
align-items: center;
justify-content: center;
color: white;
font-size: 25px;
& > img {
    height: 30%;
}
`