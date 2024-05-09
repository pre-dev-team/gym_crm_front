import React from "react";
import { Route, Routes } from "react-router-dom";
import UserReservationMainPage from "./UserReservationMainPage/UserReservationMainPage";
import UserReservationPage from "./UserReservationPage/UserReservationPage";
import UserReservationEditPage from "./UserReservationEditPage/UserReservationEditPage";
import UserMyPage from "./UserMyPage/UserMyPage";
import UserResignPage from "./UserResignPage/UserResignPage";

function UserPage(props) {
    return (
        <Routes>
            <Route path="/reservation" element={<UserReservationMainPage />} />
            <Route path="/reservation/make" element={<UserReservationPage />} />
            <Route path="/reservation/edit" element={<UserReservationEditPage />} />
            <Route path="/mypage" element={<UserMyPage />} />
            <Route path="/mypage/resign" element={<UserResignPage />} />
        </Routes>
    );
}

export default UserPage;
