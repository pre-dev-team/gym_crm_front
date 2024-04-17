/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./style";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "dayjs/locale/ko";
import ko from "date-fns/locale/ko";
import ReactSelect from "react-select";

const CustomInput = ({ value, onClick }) => (
    <button css={s.customButton} onClick={onClick}>
        {value}
    </button>
);

function DayoffRequest(props) {
    const [selectDate, setSelectDate] = useState(new Date());
    const [searchType, setSearchType] = useState(1);

    return (
        <div css={s.layout}>
            <div css={s.dayBox}>
                <DatePicker
                    onChange={(date) => setSelectDate(() => date)}
                    selected={selectDate}
                    dateFormat="yyyy-MM-dd"
                    locale={ko}
                    todayButton={true}
                    customInput={<CustomInput />}
                />
                <div css={s.selectBox}>
                    <ReactSelect
                        styles={s.selectStyle2}
                        options={s.searchTypeOption}
                        defaultValue={s.searchTypeOption[0]}
                        onChange={(e) => setSearchType(() => e.value)}
                    />
                    <span> - </span>
                    <ReactSelect
                        styles={s.selectStyle2}
                        options={s.searchTypeOption}
                        defaultValue={s.searchTypeOption[0]}
                        onChange={(e) => setSearchType(() => e.value)}
                    />
                </div>
                <button css={s.searchButton}>신청하기</button>
            </div>
        </div>
    );
}

export default DayoffRequest;