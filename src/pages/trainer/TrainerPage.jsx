import React from "react";
import TrainerMyPage from "./TrainerMyPage/TrainerMyPage";
import { Route, Routes } from "react-router-dom";
import RoutineModal from "../../components/modals/RoutineModal/RoutineModal";
import ReviewAll from "../../components/ReviewAll/ReviewAll";


function TrainerPage(props) {
    return (
        <Routes>
            <Route path="/mypage" element={<TrainerMyPage />} />

        </Routes>
    );
}

export default TrainerPage;
