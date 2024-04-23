import { css } from "@emotion/react";

export const selectStyle2 = {
    control: (baseStyles, state) => ({
        ...baseStyles,
        borderRadius: "0px",
        fontSize: "14px",
        outline: "none",
        padding: "none",
        boxShadow: "none",
        width: "100%",
    }),
};

export const selectLayout = css`
    display: flex;
    flex-direction: column;
`;

export const confirmBox = css`
    display: flex;
    justify-content: center;
    
`;