import { forwardRef } from "react";
/** @jsxImportSource @emotion/react */
import * as s from "./style";

const CustomInput = ({ value, onClick }) => {
    <button onClick={onClick} css={s.customButton}>
        {value}
    </button>;
};

export default CustomInput;
