/** @jsxImportSource @emotion/react */
import * as s from "./style";

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
            <div css={s.messageBox}>
                <span>{message}</span>
            </div>
        </div>
    );
}

export default InputWithMessagebox;
