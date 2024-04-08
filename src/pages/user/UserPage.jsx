import React from "react";
import { Route, Routes } from "react-router-dom";
import UserReservationPage from "./UserTimeReservationPage/UserTimeReservationPage";
import { useQuery } from "react-query";
import { getPrincipalRequest } from "../../apis/api/principal";

// 여기서 user관련된 모든 것 할겁니다
function UserPage(props) {
    const principalQuery = useQuery(["principalQuery"], getPrincipalRequest, {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: (response) => {
            console.log(response);
        },
        onError: (error) => {
            console.log(error);
        },
    });

    return (
        <Routes>
            <Route path="/reservation" element={<UserReservationPage />} />
            <Route path="/reservation/time" element={<UserReservationPage />} />
            <Route path="/reservation/trainer" />
        </Routes>
    );
}

export default UserPage;
