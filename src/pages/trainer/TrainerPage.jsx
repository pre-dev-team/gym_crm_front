import React from 'react';
import TrainerMyPage from './TrainerMyPage/TrainerMyPage';
import { Route, Routes } from 'react-router-dom';

function TrainerPage(props) {
    return (
        <Routes>
            <Route path="/mypage" element={<TrainerMyPage />} />
            <Route />
        </Routes>
    );
}

export default TrainerPage;