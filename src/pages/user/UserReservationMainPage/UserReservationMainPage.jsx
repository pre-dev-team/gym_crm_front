/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useRecoilState } from "recoil";
import { accountInfoAtom } from "../../../atoms/accountInfoAtom";
import { useEffect, useState } from "react";

const layout = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    color: white;
`;
const menuBox = css`
    margin-top: 60px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    flex-direction: column;
    & > h1 {
        margin: 0;
        padding: 0px 20px;
        color: white;
        font-size: 20px;
    }
`;

const linkBox = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 3px 5px 8px 3px hsla(0, 0%, 0%, 0.411);
    width: 90%;
    height: 60px;
    margin: 20px auto;
    transition: transform 0.3s, box-shadow 0.3s;
    &:nth-of-type(1) {
        margin-bottom: 20px;
    }
    & > a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: white;
    }
    &:hover {
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
        transform: translateY(2px);
    }
`;

function UserReservationMainPage(props) {
    const [userInfo] = useRecoilState(accountInfoAtom);
    const [helloMessage, setHelloMessage] = useState("");

    useEffect(() => {
        const text = `🖐안녕하세요 ${userInfo.name}님`;
        const typingHello = async () => {
            for (let i = 0; i < text.length; i++) {
                await new Promise((resolve) => setTimeout(resolve, 100));
                setHelloMessage(text.slice(0, i + 1));
            }
        };
        typingHello();
    }, [userInfo]);

    return (
        <motion.div
            transition={{ duration: 1, delay: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            css={layout}
        >
            <h1>{helloMessage}</h1>
            <div css={menuBox}>
                <h1>처음오셨나요?</h1>
                <h1>트레이너를 확인하고 예약해보세요</h1>
                <div css={linkBox}>
                    <Link to={"/user/reservation/make"}>예약하기</Link>
                </div>
                <h1>예약을 확인하고 </h1>
                <h1>변경하거나 취소하시겠습니까?</h1>
                <div css={linkBox}>
                    <Link to={"/user/reservation/edit"}>예약 변경 / 취소</Link>
                </div>
            </div>
        </motion.div>
    );
}

export default UserReservationMainPage;
