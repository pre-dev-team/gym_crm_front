import "./App.css";
import RootLayout from "./components/RootLayout/RootLayout";
import NavigationButtonBar from "./components/NavigationButtonBar/NavigationButtonBar";
import MainPage from "./pages/MainPage/MainPage";
import { Route, Routes } from "react-router-dom";
import AdminPage from "./pages/admin/AdminPage";
import UserPage from "./pages/user/UserPage";
import AuthPage from "./pages/auth/AuthPage";
import RootHeader from "./components/RootHeader/RootHeader";
import AdminRootLayout from "./components/AdminRootLayout/AdminRootLayout";

import { useQuery } from "react-query";

import TrainerInformation from "./components/TrainerInformation/TrainerInformation";
import TrainerPage from "./pages/trainer/TrainerPage";
import UserMyPage from "./pages/user/UserMyPage/UserMyPage";
import { getPrincipalRequest } from "./apis/api/principal";

function App() {
    const PrincipalQuery = useQuery(["PrincipalQuery"], getPrincipalRequest, {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: (response) => {
            console.log("현재권한: " + response.data.authorities[0].authority);
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const isTrainer = PrincipalQuery.isSuccess && PrincipalQuery.data.data.authorities[0].authority === "ROLE_TRAINER";

    return (
        <>
            {isTrainer ? (
                <AdminRootLayout>
                    <Routes>
                        <Route path="trainer/*" element={<TrainerPage />} />
                    </Routes>
                </AdminRootLayout>
            ) : (
                <RootLayout>
                    <RootHeader />
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="admin/*" element={<AdminPage />} />
                        <Route path="user/*" element={<UserPage />} />
                        <Route path="auth/*" element={<AuthPage />} />
                        <Route path="user/mypage" element={<UserMyPage />} />
                    </Routes>
                    <NavigationButtonBar />
                </RootLayout>
            )}
        </>
    );
}

export default App;
