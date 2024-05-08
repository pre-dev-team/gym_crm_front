/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./style";
import { REGEX } from "../../../constants/regex";
import { useMutation } from "react-query";
import { editTrainerPasswordRequest } from "../../../apis/api/account";
import usePrincipal from "../../../hooks/usePrincipal";

function EditTrainerPasswordPage(props) {
    const [validInputNames, setValidInputNames] = useState([]);
    const [message, setMessage] = useState("");
    const accountId = usePrincipal();
    const [trainerInfo, setTrainerInfo] = useState({
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
        setTrainerInfo(() => {
            return {
                ...trainerInfo,
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

    const editTrainernPasswordMutation = useMutation({
        mutationKey: "editTrainernPasswordMutation",
        mutationFn: editTrainerPasswordRequest,
        retry: 0,
        onSuccess: (response) => {
            console.log(response.data)
            alert("변경성공");
            window.close();
        },
        onError: (error) => {
            alert(error.reponse.data);
        },
    });

    const handleApplyClick = () => {
        editTrainernPasswordMutation.mutate({
            accountId: accountId,
            prevPassword: trainerInfo.prevPassword,
            password: trainerInfo.password,
            checkPassword: trainerInfo.checkPassword
        });
    };

    console.log()

    return (
        <div css={s.layout}>
            <h1>트레이너 비밀번호 변경</h1>
            <div css={s.inputBox}>
                <input
                    type="password"
                    name="prevPassword"
                    placeholder="기존 비밀번호"
                    value={trainerInfo.prevPassword}
                    onChange={(e) => handleInputChange(e)}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="새 비밀번호"
                    value={trainerInfo.password}
                    onChange={(e) => handleInputChange(e)}
                    disabled={!validInputNames.includes("prevPassword")}
                />
                <input
                    type="password"
                    name="checkPassword"
                    placeholder="비밀번호확인"
                    value={trainerInfo.checkPassword}
                    onChange={(e) => handleInputChange(e)}
                    disabled={!validInputNames.includes("password")}
                />
            </div>
            <h4>{message}</h4>
            <button onClick={handleApplyClick}>등록</button>
        </div>
    );
}

export default EditTrainerPasswordPage;
