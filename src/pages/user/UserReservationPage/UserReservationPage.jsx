/** @jsxImportSource @emotion/react */
import ReactDatePicker from "react-datepicker";
import * as s from "./style";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

function UserReservationPage(props) {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div>
            <div css={s.infoBox}>
                <div>
                    `📆{} , 시간: {},`
                </div>
                <div>`선택하신 트레이너: ${}`</div>
            </div>
            <div>
                <ReactDatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
            <div>// 시간 선택</div>
            <div>
                <div>트레이너 검색창</div>
                <div>트레이너 보여주는창</div>
            </div>
        </div>
    );
}

export default UserReservationPage;
