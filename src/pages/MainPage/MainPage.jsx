/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { motion } from "framer-motion";
import KakaoMapAPI from "../../components/main/KakaoMapAPI/KakaoMapAPI";
import ReviewAll from "../../components/main/ReviewAll/ReviewAll";
import { useEffect, useRef, useState } from "react";
import logo from "../../assets/image/test3.jpg";

// 메인페이지입니다

function MainPage(props) {
    const [displayText1, setText] = useState("");
    const [displayText2, setText2] = useState("");
    const backgoundRef = useRef();
    const handleOnWheel = (e) => {
        const { deltaY } = e;
        const { scrollTop } = backgoundRef.current;
        // e.preventDefault();
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

    useEffect(() => {
        const text = `"PRE-DEV와 함께 근성장의 한계를 넘어서세요"`;
        const text2 = `PRE-DEV`;
        const animateText = async () => {
            for (let i = 0; i < text.length; i++) {
                await new Promise((resolve) => setTimeout(resolve, 100));
                setText(text.slice(0, i + 1));
            }
        };
        const animateText2 = async () => {
            for (let i = 0; i < text2.length; i++) {
                await new Promise((resolve) => setTimeout(resolve, 100));
                setText2(text2.slice(0, i + 1));
            }
        };
        animateText();
        animateText2();
    }, []);

    return (
        <div onWheel={handleOnWheel} ref={backgoundRef} css={s.background}>
            <div css={s.imgBox}>
                <img src={logo} />
            </div>
            <div css={s.box1}>
                <motion.div
                    transition={{ duration: 1, delay: 0 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    css={s.text1}
                >
                    <div>{displayText2}</div>
                </motion.div>
                <motion.div
                    transition={{ duration: 1, delay: 0 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    css={s.text2}
                >
                    <div>{displayText1}</div>
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
