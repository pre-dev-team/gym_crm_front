/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./style";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "dayjs/locale/ko";
import ko from "date-fns/locale/ko";
import ReactSelect from "react-select";
import { useMutation, useQuery } from "react-query";
import { trainerHolidayRequest } from "../../apis/api/holiday";
import SelectAndCancelDayOffModal from "../modals/SelectAndCancelDayOffModal/SelectAndCancelDayOffModal";

const CustomInput = ({ value, onClick }) => (
    <button css={s.customButton} onClick={onClick}>
        {value}
    </button>
);

function DayoffRequest({ accountId }) {
    const [selectDate, setSelectDate] = useState(new Date());
    const [startTimeId, setStartTimeId] = useState(0);
    const [endTimeId, setEndTimeId] = useState(0);
    const [availableOptions, setAvailabelOptions] = useState(s.searchTypeOption2)

    const trainerHolidayMutation = useMutation({
        mutationKey: "trainerHolidayMutation",
        mutationFn: trainerHolidayRequest,
        retry: 0,
        onSuccess: response => {
            alert("신청되었습니다");
            window.location.replace("/")
        }
    })

    useEffect(() => {
        setAvailabelOptions(() => availableOptions.filter(option => option.value >= startTimeId));
    }, [startTimeId])

    const handleApplyClick = () => {
        if(window.confirm("연차 신청하시겠습니까?")) {
            trainerHolidayMutation.mutate({
                accountId : accountId,
                holidayDate: selectDate,
                startTimeId: startTimeId,
                endTimeId: endTimeId
            })
        }else {
            
        }
    }

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
                        onChange={(e) => {setStartTimeId(() => e.value) }}
                    />
                    <span> - </span>
                    <ReactSelect
                        styles={s.selectStyle2}
                        options={availableOptions}
                        defaultValue={s.searchTypeOption2[0]}
                        onChange={(e) => {setEndTimeId(() => e.value)}}
                    />
                </div>
                <button css={s.searchButton} onClick={handleApplyClick}>신청하기</button>
                <SelectAndCancelDayOffModal selectDate={selectDate} availableOptions={availableOptions} accountId={accountId} />
            </div>
        </div>
    );
}

export default DayoffRequest;