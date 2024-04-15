/** @jsxImportSource @emotion/react */
import * as s from "./style";
import "react-datepicker/dist/react-datepicker.css";
import "dayjs/locale/ko";
import DatePicker from "react-datepicker";
import ko from "date-fns/locale/ko";
import ReactSelect from "react-select";
import { useEffect, useRef, useState } from "react";
import ReservationTable from "../ReservationTable/ReservationTable";
import { useQuery } from "react-query";
import { searchReservationByNameRequset } from "../../../apis/api/admin";

const CustomInput = ({ value, onClick }) => (
    <button css={s.customButton} onClick={onClick}>
        {value}
    </button>
);

function ReservationSearch(props) {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [name, setName] = useState("");
    const [searchType, setSearchType] = useState(1);
    const [reservations, setReservations] = useState([]);
    const searchButtonRef = useRef();
    const handleInputChange = (e) => {
        if (e.key === "Enter") {
            searchButtonRef.current.focus();
            return;
        }
    };

    const searchReservationByNameQuery = useQuery(
        ["searchReservationByNameQuery"],
        () =>
            searchReservationByNameRequset({
                startDate: startDate,
                endDate: endDate,
                searchType: searchType,
                name: name,
            }),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            enabled: false,
            onSuccess: (response) => {
                setReservations(() => response.data);
            },
        }
    );

    return (
        <>
            <div css={s.dateSelectBox}>
                <DatePicker
                    onChange={(date) => setStartDate(() => date)}
                    selected={startDate}
                    dateFormat="yyyy-MM-dd"
                    locale={ko}
                    todayButton={true}
                    customInput={<CustomInput />}
                />
                <span> - </span>
                <DatePicker
                    onChange={(date) => setEndDate(() => date)}
                    selected={endDate}
                    minDate={startDate}
                    dateFormat="yyyy-MM-dd"
                    locale={ko}
                    todayButton={true}
                    customInput={<CustomInput />}
                />
            </div>
            <div css={s.selectAndNameInputBox}>
                <ReactSelect
                    styles={s.selectStyle2}
                    options={s.searchTypeOption}
                    defaultValue={s.searchTypeOption[0]}
                    onChange={(e) => setSearchType(() => e.value)}
                />
                <div>
                    <input
                        css={s.nameInput}
                        type="text"
                        placeholder="이름입력"
                        onChange={(e) => setName(e.target.value)}
                        onKeyDown={(e) => handleInputChange(e)}
                        value={name}
                    />
                    <button
                        css={s.searchButton}
                        ref={searchButtonRef}
                        onClick={() => searchReservationByNameQuery.refetch()}
                    >
                        검색
                    </button>
                </div>
            </div>
            <ReservationTable reservations={reservations} />
        </>
    );
}

export default ReservationSearch;
