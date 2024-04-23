/** @jsxImportSource @emotion/react */

import MakeRoutine from '../MakeRoutine/MakeRoutine';
import { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "dayjs/locale/ko";
import ko from "date-fns/locale/ko";
import ReactSelect from "react-select";
import RoutineModal from '../modals/RoutineModal/RoutineModal';
import * as s from './style';
import { selectReservationAllUserRequest } from '../../apis/api/reservation';
import { useQuery } from 'react-query';

const CustomInput = ({ value, onClick }) => (
    <button css={s.customButton} onClick={onClick}>
        {value}
    </button>
);

function SelectReservationAllUser({ accountId }) {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [reservationList, setReservationList] = useState([]);
    
    const selectReservationAllUserQuery = useQuery(
        ["selectReservationAllUserQuery"],
        () =>
            selectReservationAllUserRequest({
                startDate: startDate,
                endDate: endDate,
                accountId: accountId,
            }),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            enabled: false,
            onSuccess: (response) => {
                console.log(response.data)
                setReservationList(() => response.data)
            },
        }  
    );

    return (
        <div css={s.layout}>
            <div >
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
                <button onClick={() => selectReservationAllUserQuery.refetch()}>검색</button>
            </div>
            <div css={s.selectBox}>
                <ul css={s.reservationList}>
                    {reservationList.map(reservation => (
                        <li key={reservation.reservationId}>
                            <p>{reservation.name}</p>
                            <span>{reservation.reservationDate}</span>
                            <span>{reservation.timeDuration}</span>
                            <RoutineModal reservationId={reservation.reservationId} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default SelectReservationAllUser;