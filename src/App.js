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
import TrainerPage from "./pages/trainer/TrainerPage";

import UserMyPage from "./pages/user/UserMyPage/UserMyPage";
import { getPrincipalRequest } from "./apis/api/principal";
import AdminMainPage from "./pages/admin/AdminMainPage/AdminMainPage";
import TrainerMainPage from "./pages/trainer/TrainerMainPage/TrainerMainPage";
import Inbody from "./components/Inbody/Inbody";

function App() {
    const principalQuery = useQuery(["principalQuery"], getPrincipalRequest, {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: (response) => {
            console.log("현재권한: " + response.data.authorities[0].authority);
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const isTrainer = principalQuery.isSuccess && principalQuery.data.data.authorities[0].authority === "ROLE_TRAINER";
    const isAdmin = principalQuery.isSuccess && principalQuery.data.data.authorities[0].authority === "ROLE_ADMIN";

    return (
        <>
            {isAdmin ? (
                <AdminRootLayout>
                    <Routes>
                        <Route path="/" element={<AdminMainPage />} />
                        <Route path="admin/*" element={<AdminPage />} />
                    </Routes>
                </AdminRootLayout>
            ) : isTrainer ? (
                <AdminRootLayout>
                    <Routes>
                        <Route path="/" element={<TrainerMainPage />} />
                        <Route path="trainer/*" element={<TrainerPage />} />
                        <Route path="/inbody" element={<Inbody />} />
                    </Routes>
                </AdminRootLayout>
            ) : (
                <RootLayout>
                    <RootHeader />
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="user/*" element={<UserPage />} />
                        <Route path="auth/*" element={<AuthPage />} />
                    </Routes>
                    <NavigationButtonBar />
                </RootLayout>
            )}
        </>
    );
}

export default App;
