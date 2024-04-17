/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { motion } from "framer-motion";
import KakaoMapAPI from "../../components/KakaoMapAPI/KakaoMapAPI";
import ReviewAll from "../../components/ReviewAll/ReviewAll";
import { useEffect, useRef, useState } from "react";

// 메인페이지입니다

function MainPage(props) {
    const backgroundDivRef = useRef();

    useEffect(() => {
        const backgroundDivRefCurrent = backgroundDivRef.current;

        const ScrollWheelHandler = (e) => {
            e.preventDefault();
            const { deltaY } = e;
            const { scrollTop } = backgroundDivRef.current;
            console.log(scrollTop);
            if (deltaY > 0) {
                if (scrollTop >= 0 && scrollTop < 680) {
                    backgroundDivRef.current.scrollTo(680);
                } else if (scrollTop >= 680 && scrollTop < 680 * 2) {
                    backgroundDivRef.current.scrollTo({
                        top: 680 * 2,
                        left: 0,
                        behavior: "smooth",
                    });
                } else if (scrollTop >= 680 * 2 && scrollTop < 680 * 3) {
                    backgroundDivRef.current.scrollTo({
                        top: 680 * 3,
                        left: 0,
                        behavior: "smooth",
                    });
                }
            }

            backgroundDivRefCurrent.addEventListener("wheel", ScrollWheelHandler);
        };

        return () => {
            backgroundDivRefCurrent.removeEventListener("wheel", ScrollWheelHandler);
        };
    }, []);

    return (
        <div ref={backgroundDivRef} css={s.background}>
            <div css={s.box1} className="inner">
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
            </div>
            <div css={s.box2} className="inner">
                <ReviewAll />
            </div>
            <div css={s.box3} className="inner">
                <KakaoMapAPI />
            </div>
        </div>
    );
}

export default MainPage;
