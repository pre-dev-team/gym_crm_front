/** @jsxImportSource @emotion/react */
import * as s from "./style";
import AuthPageInput from "../../../components/auth/AuthPageInput/AuthPageinput";
import RightTopButton from "../../../components/auth/RightTopButton/RightTopButton";
import useInput from "../../../hooks/useInput";
import { useMutation } from "react-query";
import { oAtuh2MergeRequest } from "../../../apis/api/oAuth2Merge";
import { useSearchParams } from "react-router-dom";

function OAuth2MergePage() {
    const [searchParams] = useSearchParams();
    const [username, usernameChange] = useInput();
    const [password, passwordChange] = useInput();

    const oAuth2MergeMutation = useMutation({
        mutationKey: "oAuth2MergeMutation",
        mutationFn: oAtuh2MergeRequest,
        onSuccess: (response) => {
            console.log(response);
            alert("계정 통합이 완료되었습니다.\n다시 로그인 하세요.");
            window.location.replace("/auth/user/signin");
        },
        onError: (error) => {
            alert(error.response.data);
        },
    });

    const handleSigninSubmit = () => {
        console.log({
            username,
            password,
            oauth2Name: searchParams.get("name"),
            providerName: searchParams.get("provider"),
        });
        oAuth2MergeMutation.mutate({
            username,
            password,
            oauth2Name: searchParams.get("name"),
            oauth2ProviderName: searchParams.get("provider"),
        });
    };

    return (
        <>
            <div>
                <h2>계정 통합 로그인</h2>
                <RightTopButton onClick={handleSigninSubmit}>로그인하기</RightTopButton>
            </div>
            <AuthPageInput
                type={"text"}
                name={"username"}
                placeholder={"사용자이름"}
                value={username}
                onChange={usernameChange}
            />
            <AuthPageInput
                type={"password"}
                name={"password"}
                placeholder={"비밀번호"}
                value={password}
                onChange={passwordChange}
            />
        </>
    );
}

export default OAuth2MergePage;
