/** @jsxImportSource @emotion/react */
import RoutineModal from '../modals/RoutineModal/RoutineModal';
import * as s from './style';

function SelectReservationAllUser({ reservationList }) {

    return (
        <div css={s.layout}>
            <ul css={s.reservationList}>
                {reservationList.map(reservation => (
                    <li key={reservation.id}>
                        <p>{reservation.name}</p>
                        <p>{reservation.timeDuration}</p>
                        <RoutineModal />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SelectReservationAllUser;