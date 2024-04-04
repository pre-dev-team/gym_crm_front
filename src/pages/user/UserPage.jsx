import React from "react";
import { Route, Routes } from "react-router-dom";
import UserReservationPage from "./UserReservationPage/UserReservationPage";

// 여기서 user관련된 모든 것 할겁니다
function UserPage(props) {
    return (
        <Routes>
            <Route path="/reservation" element={<UserReservationPage />} />
            <Route />
        </Routes>
    );
}

export default UserPage;
