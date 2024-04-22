/** @jsxImportSource @emotion/react */
import MakeRoutine from '../MakeRoutine/MakeRoutine';
import RoutineModal from '../modals/RoutineModal/RoutineModal';
import * as s from './style';

function SelectReservationAllUser({ reservationList }) {

    return (
        <div css={s.layout}>
            <ul css={s.reservationList}>
                {reservationList.map(reservation => (
                    <li key={reservation.id}>
                        <p>{reservation.name}</p>
                        <span>{reservation.reservationDate}</span>
                        <span>{reservation.timeDuration}</span>
                        <MakeRoutine /> 
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SelectReservationAllUser;