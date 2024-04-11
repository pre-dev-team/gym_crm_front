/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const layout = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

const linkBox = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 3px 5px 8px 3px hsla(0, 0%, 0%, 0.411);
    width: 200px;
    height: 120px;
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
    return (
        <motion.div
            transition={{ duration: 1, delay: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            css={layout}
        >
            <div css={linkBox}>
                <Link to={"/user/reservation/time"}>시간으로 예약</Link>
            </div>
            <div css={linkBox}>
                <Link to={"/user/reservation/trainer"}>트레이너 예약</Link>
            </div>
        </motion.div>
    );
}

export default UserReservationMainPage;
