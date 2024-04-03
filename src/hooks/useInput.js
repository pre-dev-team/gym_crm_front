import { useState } from "react"

const useInput = () => {
    const [value, setValue] = useState("");
    const [message, setMessage] = useState("")

    const handleChange = (e) => {
        setValue(() => e.target.value);
    }

    return [value, handleChange, message, setValue, setMessage];
}

export default useInput;