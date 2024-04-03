import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserSignupPage from './UserSignupPage/UserSignupPage';
import UserSigninPage from './UserSigninPage/UserSigninPage';

function AuthPage(props) {
    // 회원가입, 로그인, oauth 처리할 페이지입니다

    return (
        <Routes>
            <Route path='/user/signup' element={<UserSignupPage />}/>
            <Route path='/admin/signup'/>
            <Route path='/user/signin' element={<UserSigninPage />}/>
            <Route path='/admin/signin' element={<UserSigninPage />}/>
            <Route />
            <Route />
        </Routes>
    );
}

export default AuthPage;