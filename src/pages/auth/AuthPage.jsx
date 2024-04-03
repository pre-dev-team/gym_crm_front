import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserSignupPage from './UserSignupPage/UserSignupPage';

function AuthPage(props) {
    // 회원가입, 로그인, oauth 처리할 페이지입니다

    return (
        <Routes>
            <Route path='/user/signup' element={<UserSignupPage />}/>
            <Route path='/admin/signup'/>
            <Route />
            <Route />
            <Route />
        </Routes>
    );
}

export default AuthPage;