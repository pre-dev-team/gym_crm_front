/** @jsxImportSource @emotion/react */
import * as s from './style';

import { MdErrorOutline, MdCheckCircleOutline } from "react-icons/md";

function InputWithMessagebox(props) {

    const { message, type, placeholder, value, ref, name, onChange } = props;
    return (
        <div css={s.layout}>
            <div css={s.inputBox}>
                <input
                    type={type}
                    name={name}
                    value={value}
                    ref={ref}
                    placeholder={placeholder}
                    maxLength={20}
                    onChange={onChange}
                />
            </div>
            {
                !!message &&
                <div css={s.inputIcon(message.type)}>
                    {message.type === "error" ? <MdErrorOutline /> : <MdCheckCircleOutline />}
                </div>
            }

            {
                !!message &&
                <div css={s.messageBox}>
                    {message.text}
                </div>
            }

        </div>
    );
}

export default InputWithMessagebox;