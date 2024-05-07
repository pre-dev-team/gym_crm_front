/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./style";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";

function AgreementAccordion({ title, content, setCheck, check }) {
    const [isShow, setShow] = useState(false);
    const handleClick = () => {
        setShow(() => !isShow);
    };

    const handleCheckClick = () => {
        setCheck((prev) => {
            return {
                ...prev,
                [title]: {
                    status: !prev[title].status,
                },
            };
        });
    };

    return (
        <div css={s.container}>
            <h3>{title}</h3>
            <div css={s.checkBox} onClick={handleCheckClick}>
                {check[title].status ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            </div>
            <span onClick={handleClick}>펼치기</span>
            <div>
                <textarea css={s.textarea(isShow)}>{content}</textarea>
            </div>
        </div>
    );
}

export default AgreementAccordion;
