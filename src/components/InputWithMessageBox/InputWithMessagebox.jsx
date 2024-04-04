/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { motion } from "framer-motion";
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
            {!!message && (
                <motion.div
                    transition={{ duration: 0.5, delay: 0 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    css={s.inputIcon(message.type)}
                >
                    {message.type === "error" ? <MdErrorOutline /> : <MdCheckCircleOutline />}
                </motion.div>
            )}

            {!!message && (
                <motion.div
                    transition={{ duration: 0.5, delay: 0.3 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    css={s.messageBox(message.type)}
                >
                    {message.text}
                </motion.div>
            )}
        </div>
    );
}

export default InputWithMessagebox;
