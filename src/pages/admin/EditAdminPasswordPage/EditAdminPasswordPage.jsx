/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./style";
import { REGEX } from "../../../constants/regex";
import { useMutation } from "react-query";
import { editUserPasswordRequest } from "../../../apis/api/account";

function EditAdminPasswordPage() {
    const [validInputNames, setValidInputNames] = useState([]);
    const [message, setMessage] = useState("");
    const [trainerApplyInfo, setTrainerApplyInfo] = useState({
        prevPassword: "",
        password: "",
        checkPassword: "",
    });

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const handleInputChange = (e) => {
        const { value, name } = e.target;
        setTrainerApplyInfo(() => {
            return {
                ...trainerApplyInfo,
                [name]: value,
            };
        });

        const isValid = REGEX.get(name).regexr.test(value);

        if (isValid) {
            setValidInputNames(() => [...validInputNames, name]);
            setMessage(() => "");
        } else {
            setValidInputNames(() => validInputNames.filter((inputName) => inputName !== name));
            setMessage(() => REGEX.get(name).text);
        }
    };

    const editAdminPasswordMutation = useMutation({
        mutationKey: "editAdminPasswordMutation",
        mutationFn: editUserPasswordRequest,
        retry: 0,
        onSuccess: (response) => {
            alert("변경성공");
            window.close();
        },
        onError: (error) => {
            alert(error.reponse.data);
        },
    });

    const handleApplyClick = () => {
        editAdminPasswordMutation.mutate({
            prevPassword: trainerApplyInfo.prevPassword,
            password: trainerApplyInfo.password,
            checkPassword: trainerApplyInfo.checkPassword,
        });
    };

    return (
        <div css={s.layout}>
            <h1>관리자 비밀번호 변경</h1>
            <div css={s.inputBox}>
                <input
                    type="password"
                    name="prevPassword"
                    placeholder="기존 비밀번호"
                    value={trainerApplyInfo.prevPassword}
                    onChange={(e) => handleInputChange(e)}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="새 비밀번호"
                    value={trainerApplyInfo.password}
                    onChange={(e) => handleInputChange(e)}
                    disabled={!validInputNames.includes("prevPassword")}
                />
                <input
                    type="password"
                    name="checkPassword"
                    placeholder="비밀번호확인"
                    value={trainerApplyInfo.checkPassword}
                    onChange={(e) => handleInputChange(e)}
                    disabled={!validInputNames.includes("password")}
                />
            </div>
            <h4>{message}</h4>
            <button onClick={handleApplyClick}>등록</button>
        </div>
    );
}

export default EditAdminPasswordPage;
