/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./style";
import { REGEX } from "../../../constants/regex";
import { useMutation } from "react-query";
import { trainerSignupRequest } from "../../../apis/api/signup";

function AdminTrainerRegisterPage(props) {
    const [validInputNames, setValidInputNames] = useState([]);
    const [message, setMessage] = useState("");
    const [trainerApplyInfo, setTrainerApplyInfo] = useState({
        username: "",
        password: "",
        checkPassword: "",
        name: "",
        phone: "",
        email: "",
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
    const trainerSignupMutation = useMutation({
        mutationKey: "",
        mutationFn: trainerSignupRequest,
        retry: 0,
        onSuccess: (response) => {
            alert("등록성공");
            window.close();
        },
        onError: (error) => {
            alert(error.reponse.data);
        },
    });
    const handleApplyClick = () => {
        trainerSignupMutation.mutate(trainerApplyInfo);
    };

    return (
        <div css={s.layout}>
            <h1>트레이너 등록</h1>
            <div css={s.inputBox}>
                <input
                    type="text"
                    name="username"
                    placeholder="아이디"
                    value={trainerApplyInfo.username}
                    onChange={(e) => handleInputChange(e)}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="비밀번호"
                    value={trainerApplyInfo.password}
                    onChange={(e) => handleInputChange(e)}
                    disabled={!validInputNames.includes("username")}
                />
                <input
                    type="password"
                    name="checkPassword"
                    placeholder="비밀번호확인"
                    value={trainerApplyInfo.checkPassword}
                    onChange={(e) => handleInputChange(e)}
                    disabled={!validInputNames.includes("username")}
                />
                <input
                    type="text"
                    name="name"
                    placeholder="이름"
                    value={trainerApplyInfo.name}
                    onChange={(e) => handleInputChange(e)}
                    disabled={!validInputNames.includes("password")}
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="핸드폰"
                    value={trainerApplyInfo.phone}
                    onChange={(e) => handleInputChange(e)}
                    disabled={!validInputNames.includes("name")}
                />
                <input
                    type="text"
                    name="email"
                    placeholder="이메일"
                    value={trainerApplyInfo.email}
                    onChange={(e) => handleInputChange(e)}
                    disabled={!validInputNames.includes("phone")}
                />
            </div>
            <h4>{message}</h4>
            <button onClick={handleApplyClick}>등록</button>
        </div>
    );
}

export default AdminTrainerRegisterPage;
