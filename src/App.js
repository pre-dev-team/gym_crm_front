import "./App.css";
import RootLayout from "./components/layouts/RootLayout/RootLayout";
import NavigationButtonBar from "./components/layouts/NavigationButtonBar/NavigationButtonBar";
import MainPage from "./pages/MainPage/MainPage";
import { Route, Routes } from "react-router-dom";
import UserPage from "./pages/user/UserPage";
import AuthPage from "./pages/auth/AuthPage";
import RootHeader from "./components/layouts/RootHeader/RootHeader";
import { useQuery } from "react-query";
import { getPrincipalRequest } from "./apis/api/principal";
import AdminMainPage from "./pages/admin/AdminMainPage/AdminMainPage";
import TrainerMainPage from "./pages/trainer/TrainerMainPage/TrainerMainPage";
import TrainerInbodyInputPage from "./pages/trainer/TrainerInbodyInputPage/TrainerInbodyInputPage";
import AdminTrainerRegisterPage from "./pages/admin/AdminTrainerRegisterPage/AdminTrainerRegisterPage";
import { useEffect } from "react";
import { messaging } from "./apis/api/firebase/firebaseConfig";
import { onMessage } from "firebase/messaging";
import EditAdminPasswordPage from "./pages/admin/EditAdminPasswordPage/EditAdminPasswordPage";
import EditTrainerPasswordPage from "./pages/trainer/EditTrainerPasswordPage/EditTrainerPasswordPage";

function App() {
    const principalQuery = useQuery(["principalQuery"], getPrincipalRequest, {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: (response) => {
        },
    });

    useEffect(() => {
        const unsubscribe = onMessage(messaging, (payload) => {
            const notificationTitle = payload.notification.title;
            const notificationOptions = {
                body: payload.notification.body,
            };

            if (Notification.permission === "granted") {
                new Notification(notificationTitle, notificationOptions);
            }

            const notification = {
                title: notificationTitle,
                body: payload.notification.body,
            };
            localStorage.setItem("notification", JSON.stringify(notification));
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const isTrainer = principalQuery.isSuccess && principalQuery.data.data.authorities[0].authority === "ROLE_TRAINER";
    const isAdmin = principalQuery.isSuccess && principalQuery.data.data.authorities[0].authority === "ROLE_ADMIN";

    return (
        <>
            {isAdmin ? (
                <Routes>
                    <Route path="/" element={<AdminMainPage />} />
                    <Route path="/admin/register/trainer" element={<AdminTrainerRegisterPage />} />
                    <Route path="/admin/edit/password" element={<EditAdminPasswordPage />} />
                </Routes>
            ) : isTrainer ? (
                <>
                    <Routes>
                        <Route path="/" element={<TrainerMainPage />} />
                        <Route path="/inbody" element={<TrainerInbodyInputPage />} />
                        <Route path="/tariner/edit/password" element={<EditTrainerPasswordPage />} />
                    </Routes>
                </>
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
