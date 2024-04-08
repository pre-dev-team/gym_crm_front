/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { Link } from "react-router-dom";

const layout = css``;

const linkBox = css``;

function UserReservationMainPage(props) {
    return (
        <div css={layout}>
            <div css={linkBox}>
                <Link to={null}>시간으로 예약</Link>
            </div>
            <div>
                <Link>트레이너 예약</Link>
            </div>
        </div>
    );
}

export default UserReservationMainPage;
