/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { motion } from "framer-motion";
import KakaoMapAPI from "../../components/KakaoMapAPI/KakaoMapAPI";
import ReviewAll from "../../components/ReviewAll/ReviewAll";
import { useRef } from "react";
import logo from "../../assets/image/test.png";

// 메인페이지입니다

function MainPage(props) {
    const backgoundRef = useRef();
    const handleOnWheel = (e) => {
        const { deltaY } = e;
        const { scrollTop } = backgoundRef.current;
        console.log(backgoundRef.current.scrollTo);
        e.preventDefault();
        if (deltaY > 0) {
            if (scrollTop >= 0 && scrollTop < 680) {
                backgoundRef.current.scrollTo({
                    top: 680,
                    left: 0,
                    behavior: "smooth",
                });
            } else if (scrollTop >= 680 && scrollTop < 680 * 2) {
                backgoundRef.current.scrollTo({
                    top: 680 * 2,
                    left: 0,
                    behavior: "smooth",
                });
            } else if (scrollTop >= 680 * 2 && scrollTop < 680 * 3) {
                backgoundRef.current.scrollTo({
                    top: 680 * 3,
                    left: 0,
                    behavior: "smooth",
                });
            }
        } else if (deltaY < 0) {
            if (scrollTop < 680 * 3 && scrollTop >= 680 * 2) {
                backgoundRef.current.scrollTo({
                    top: 680,
                    left: 0,
                    behavior: "smooth",
                });
            } else if (scrollTop < 680 * 2 && scrollTop < 720) {
                backgoundRef.current.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                });
            }
        }
    };

    return (
        <div onWheel={handleOnWheel} ref={backgoundRef} css={s.background}>
            <div css={s.box1}>
                <motion.div
                    transition={{ duration: 1, delay: 0 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    css={s.text1}
                >
                    <div>@team-pre-dev</div>
                    <div>WELCOME to Pre-Dev!</div>
                </motion.div>
                <motion.div
                    transition={{ duration: 1, delay: 0.5 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    css={s.logo}
                >
                    <img src={logo} alt="" />
                </motion.div>
                <motion.div
                    transition={{ duration: 1, delay: 1 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    css={s.text2}
                >
                    <div>Real Man</div>
                    <div>Workout-verse</div>
                </motion.div>
                <motion.div
                    transition={{ duration: 1, delay: 1.5 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    css={s.text3}
                >
                    <div>건강한 신체, 체력 향상, 목표</div>
                    <div>달성하기 위한 기본입니다</div>
                </motion.div>
                <motion.div
                    transition={{ duration: 1, delay: 2 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    css={s.text4}
                >
                    Be a man at Pre-Dev
                </motion.div>
            </div>
            <div css={s.box2}>
                <ReviewAll />
            </div>
            <div css={s.box3}>
                <KakaoMapAPI />
            </div>
        </div>
    );
}

export default MainPage;
