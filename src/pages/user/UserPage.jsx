import React from "react";
import { Route, Routes } from "react-router-dom";
import UserReservationPage from "./UserTimeReservationPage/UserTimeReservationPage";
import { useQuery } from "react-query";
import { getPrincipalRequest } from "../../apis/api/principal";
import UserReservationMainPage from "./UserReservationMainPage/UserReservationMainPage";
import UserTrainerReservationPage from "./UserTrainerReservationPage/UserTrainerReservationPage";

// 여기서 user관련된 모든 것 할겁니다
function UserPage(props) {
    return (
        <Routes>
            <Route path="/reservation" element={<UserReservationMainPage />} />
            <Route path="/reservation/time" element={<UserReservationPage />} />
            <Route path="/reservation/trainer" element={<UserTrainerReservationPage />} />
        </Routes>
    );
}

export default UserPage;
