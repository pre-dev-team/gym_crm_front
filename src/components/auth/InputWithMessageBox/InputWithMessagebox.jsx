/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { motion } from "framer-motion";
import { forwardRef } from "react";
import { MdErrorOutline, MdCheckCircleOutline } from "react-icons/md";

const InputWithMessagebox = forwardRef(({ type, name, value, placeholder, onChange, message }, ref) => {
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            ref.current.click();
        }
    };

    return (
        <div css={s.layout}>
            <div css={s.inputBox}>
                <input
                    type={type}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    maxLength={20}
                    onChange={onChange}
                    onKeyDown={(e) => handleKeyDown(e)}
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
});

export default InputWithMessagebox;
