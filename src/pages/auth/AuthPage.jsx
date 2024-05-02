import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import UserSignupPage from "./UserSignupPage/UserSignupPage";
import UserSigninPage from "./UserSigninPage/UserSigninPage";
import SearchAccountPage from "./SearchAccountPage/SearchAccountPage";
import OAuth2Page from "../OAuth2Page/OAuth2Page";
import OAuth2SignupPage from "../OAuth2SignupPage/OAuth2SignupPage";
import { useQueryClient } from "react-query";
import OAuth2SigninPage from "../OAuth2SigninPage/OAuth2SigninPage";
import OAuth2MergePage from "../OAuth2MergePage/OAuth2MergePage";
import JoinPresenter from "../../components/JoinPresenter/JoinPresenter";
import SearchPasswordPage from "./SearchPasswordPage/SearchPasswordPage";

function AuthPage(props) {

    return (
        <Routes>
            <Route path="/user/signup" element={<UserSignupPage />} />
            <Route path="/user/signin" element={<UserSigninPage />} />
            <Route path="/user/search/username" element={<SearchAccountPage />} />
            <Route path="/user/search/password" element={<SearchPasswordPage />} />
            <Route path="/user/agree" element={<JoinPresenter />} />
            <Route path='/oauth2' element={ <OAuth2Page /> } />
            <Route path='/oauth2/signin' element={ <OAuth2SigninPage /> } />
            <Route path='/oauth2/merge' element={<OAuth2MergePage />} />
            <Route path='/oauth2/signup' element={ <OAuth2SignupPage /> }/>
        </Routes>
    );
}

export default AuthPage;
