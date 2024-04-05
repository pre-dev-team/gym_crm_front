import "./App.css";
import RootLayout from "./components/RootLayout/RootLayout";
import NavigationButtonBar from "./components/NavigationButtonBar/NavigationButtonBar";
import MainPage from "./pages/MainPage/MainPage";
import { Route, Routes } from "react-router-dom";
import AdminPage from "./pages/admin/AdminPage";
import UserPage from "./pages/user/UserPage";
import AuthPage from "./pages/auth/AuthPage";
import RootHeader from "./components/RootHeader/RootHeader";

import { useQuery } from "react-query";

import TrainerInformation from "./components/TrainerInformation/TrainerInformation";


function App() {
    const PrincipalQuery = useQuery(["PrincipalQuery"], null, {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: (response) => {
            console.log("권한체크");
        },
        onError: (error) => {
            console.log(error);
        },
    });

    return (
        <RootLayout>
            <RootHeader />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="admin/*" element={<AdminPage />} />
                <Route path="user/*" element={<UserPage />} />
                <Route path="auth/*" element={<AuthPage />} />
                <Route path="user/mypage" element={<TrainerInformation />} />
            </Routes>
            <NavigationButtonBar />
        </RootLayout>
    );
}

export default App;
