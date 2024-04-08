/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import * as s from "./style";

function UserMyPage(props) {
    return (
        <div css={s.layout}>
            <div css={s.infoBox}>
                <div css={s.info}>
                    <div>어쩌고</div>
                    <div>아무개</div>
                    <div>010-3334-1132</div>
                    <div>eslese@sdgsdg.com</div>
                    <button>비밀번호 변경</button>
                </div>
                <div css={s.inbodyBox}>
                    <h1>인바디</h1>
                    <div>
                        <Link>날짜1</Link>
                        <Link>날짜2</Link>
                        <Link>날짜3</Link>
                    </div>
                </div>
            </div>
            <div css={s.reservationBox}>
                <button>이전예약조회</button>
                <div>
                    <h1></h1>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default UserMyPage;
