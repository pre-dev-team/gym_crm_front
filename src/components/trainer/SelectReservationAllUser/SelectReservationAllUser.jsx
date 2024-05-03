/** @jsxImportSource @emotion/react */
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "dayjs/locale/ko";
import ko from "date-fns/locale/ko";
import * as s from "./style";
import MakeRoutineModal from "../../modals/trainerModal/MakeRoutineModal/MakeRoutineModal";
import { selectReservationAllUserRequest } from "../../../apis/api/reservation";
import { useQuery } from "react-query";
import SelectRoutineModal from "../../modals/trainerModal/SelectRoutineModal/SelectRoutineModal";

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
                console.log(response.data);
                setReservationList(() => response.data);
            },
        }
    );

    return (
        <div css={s.layout}>
            <div css={s.dateBox}>
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
                <table css={s.table}>
                    {reservationList.map((res) => {
                        return (
                            <tbody key={res.reservationId}>
                                <tr>
                                    <th rowSpan={2}>{res.name}</th>
                                    <th>{res.reservationDate}</th>
                                    <td>
                                        <SelectRoutineModal reservationId={res.reservationId} />
                                    </td>
                                </tr>
                                <tr>
                                    <th>{res.timeDuration}</th>

                                    <td>
                                        <MakeRoutineModal reservationId={res.reservationId} />
                                    </td>
                                </tr>
                            </tbody>
                        );
                    })}
                </table>
            </div>
        </div>
    );
}

export default SelectReservationAllUser;
