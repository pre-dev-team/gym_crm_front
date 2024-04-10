/** @jsxImportSource @emotion/react */
import KakaoMapAPI from "../../components/KakaoMapAPI/KakaoMapAPI";
import ReviewAll from "../../components/ReviewAll/ReviewAll";
import TrainerInformation from "../../components/TrainerInformation/TrainerInformation";
import * as s from "./style";
import { motion } from "framer-motion";

// 메인페이지입니다

function MainPage(props) {
    return (
        <div css={s.test}>
            <motion.div
                transition={{ duration: 1, delay: 0 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                team-pre-dev
            </motion.div>
            <motion.div
                transition={{ duration: 1, delay: 0.5 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                WELCOME to Pre-Dev!
            </motion.div>
            <motion.div
                transition={{ duration: 1, delay: 1 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                Real Man Workout-verse
            </motion.div>
            <motion.div
                transition={{ duration: 1, delay: 1.5 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                건강한 신체, 체력 향상, 목표를 달성하기 위한 기본입니다
            </motion.div>
            <motion.div
                transition={{ duration: 1, delay: 2 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                Be A Man At Pre-Dev
            </motion.div>

            <ReviewAll />

            <KakaoMapAPI />
        </div>
    );
}

export default MainPage;
