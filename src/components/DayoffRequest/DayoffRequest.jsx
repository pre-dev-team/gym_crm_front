/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./style";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "dayjs/locale/ko";
import ko from "date-fns/locale/ko";
import ReactSelect from "react-select";
import { useQuery } from "react-query";
import { trainerHolidayRequest } from "../../apis/api/trainer";

const CustomInput = ({ value, onClick }) => (
    <button css={s.customButton} onClick={onClick}>
        {value}
    </button>
);

function DayoffRequest({accountId}) {
    const [selectDate, setSelectDate] = useState(new Date());
    const [ timeList, setTimeList ] = useState([]);
    const [ confirm, setConfirm ] = useState(0);

    const trainerHolidayQuery = useQuery(
        ["trainerHolidayQuery"],
        () =>
            trainerHolidayRequest({
                accountId: accountId,
                holidayDate: selectDate,
                time: timeList,
                confirm: confirm,
            }),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            enabled: false,
            onSuccess: (response) => {
                console.log(response.data);
                alert("연차 신청되었습니다.")
            },
        }
    );

    console.log(timeList);

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
                        options={s.searchTypeOption1}
                        defaultValue={s.searchTypeOption1[0]}
                        onChange={(e) => setTimeList(() => e.value)}
                    />
                    <span> - </span>
                    <ReactSelect
                        styles={s.selectStyle2}
                        options={s.searchTypeOption2}
                        defaultValue={s.searchTypeOption2[0]}
                        onChange={(e) => setTimeList(() => e.value)}
                    />
                </div>
                <button css={s.searchButton} onClick={() => trainerHolidayQuery.refetch()}>신청하기</button>
            </div>
        </div>
    );
}

export default DayoffRequest;