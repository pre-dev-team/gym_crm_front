import "./App.css";
import RootLayout from "./components/RootLayout/RootLayout";
import NavigationButtonBar from "./components/NavigationButtonBar/NavigationButtonBar";
import MainPage from "./pages/MainPage/MainPage";
import { Route, Routes } from "react-router-dom";
import UserPage from "./pages/user/UserPage";
import AuthPage from "./pages/auth/AuthPage";
import RootHeader from "./components/RootHeader/RootHeader";
import AdminRootLayout from "./components/AdminRootLayout/AdminRootLayout";
import { useQuery } from "react-query";
import TrainerPage from "./pages/trainer/TrainerPage";
import { getPrincipalRequest } from "./apis/api/principal";
import AdminMainPage from "./pages/admin/AdminMainPage/AdminMainPage";
import TrainerMainPage from "./pages/trainer/TrainerMainPage/TrainerMainPage";
import TrainerInbodyInputPage from "./pages/trainer/TrainerInbodyInputPage/TrainerInbodyInputPage";
import AdminTrainerRegisterPage from "./pages/admin/AdminTrainerRegisterPage/AdminTrainerRegisterPage";
import { useEffect } from "react";
import { messaging } from "./apis/api/firebase/firebaseConfig";
import { onMessage } from "firebase/messaging";

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

    useEffect(() => {
        const unsubscribe = onMessage(messaging, (payload) => {
            console.log("온그라운드 푸쉬 알림 수신", payload);
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
                    <Route
                        path="/"
                        element={
                            <AdminRootLayout>
                                <AdminMainPage />
                            </AdminRootLayout>
                        }
                    />
                    <Route path="/admin/register/trainer" element={<AdminTrainerRegisterPage />} />
                </Routes>
            ) : isTrainer ? (
                <>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <AdminRootLayout>
                                    <TrainerMainPage />
                                </AdminRootLayout>
                            }
                        />
                        <Route
                            path="trainer/*"
                            element={
                                <AdminRootLayout>
                                    <TrainerPage />
                                </AdminRootLayout>
                            }
                        />
                        <Route path="/inbody" element={<TrainerInbodyInputPage />} />
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
