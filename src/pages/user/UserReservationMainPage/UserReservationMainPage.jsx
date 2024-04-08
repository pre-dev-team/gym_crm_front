/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

const layout = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border: 1px solid white;
`;

const linkBox = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
    width: 200px;
    height: 120px;
    &:nth-of-type(1) {
        margin-bottom: 20px;
    }
    & > a {
        text-decoration: none;
        color: white;
    }
`;

function UserReservationMainPage(props) {
    return (
        <div css={layout}>
            <div css={linkBox}>
                <Link to={"/user/reservation/time"}>시간으로 예약</Link>
            </div>
            <div css={linkBox}>
                <Link to={"/user/reservation/trainer"}>트레이너 예약</Link>
            </div>
        </div>
    );
}

export default UserReservationMainPage;
