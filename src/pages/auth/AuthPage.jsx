import { Route, Routes } from "react-router-dom";
import UserSignupPage from "./UserSignupPage/UserSignupPage";
import UserSigninPage from "./UserSigninPage/UserSigninPage";
import SearchAccountPage from "./SearchAccountPage/SearchAccountPage";
import OAuth2Page from "./OAuth2Page/OAuth2Page";
import OAuth2SigninPage from "./OAuth2SigninPage/OAuth2SigninPage";
import OAuth2MergePage from "./OAuth2MergePage/OAuth2MergePage";
import JoinPresenter from "./JoinPresenter/JoinPresenter";
import SearchPasswordPage from "./SearchPasswordPage/SearchPasswordPage";

function AuthPage(props) {
    return (
        <Routes>
            <Route path="/user/signup" element={<UserSignupPage />} />
            <Route path="/user/signin" element={<UserSigninPage />} />
            <Route path="/user/search/username" element={<SearchAccountPage />} />
            <Route path="/user/search/password" element={<SearchPasswordPage />} />
            <Route path="/user/agreement" element={<JoinPresenter />} />
            <Route path="/oauth2" element={<OAuth2Page />} />
            <Route path="/oauth2/signin" element={<OAuth2SigninPage />} />
            <Route path="/oauth2/merge" element={<OAuth2MergePage />} />
        </Routes>
    );
}

export default AuthPage;
