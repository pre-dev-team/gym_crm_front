import React from "react";
import { Route, Routes } from "react-router-dom";
import UserSignupPage from "./UserSignupPage/UserSignupPage";
import UserSigninPage from "./UserSigninPage/UserSigninPage";
import SearchAccountPage from "./SearchAccountPage/SearchAccountPage";

function AuthPage(props) {
    // 회원가입, 로그인, oauth 처리할 페이지입니다

    return (
        <Routes>
            <Route path="/user/signup" element={<UserSignupPage />} />
            <Route path="/user/signin" element={<UserSigninPage />} />
            <Route path="/user/search/username" element={<SearchAccountPage />} />
            <Route />
        </Routes>
    );
}

export default AuthPage;
