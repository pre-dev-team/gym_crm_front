/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import * as s from './style';
import { useQuery, useQueryClient } from "react-query";
import { getTodayReservationRequest } from '../../apis/api/reservation';

function TodayReservation({trainerId, today}) {

    const [reservations, setReservations] = useState([]);


    const getTodayReservationQuery = useQuery(["getTodayReservationQuery"], 
    () =>  getTodayReservationRequest({
        trainerId: trainerId,
        today: today
    }), {
        enabled: !!trainerId,
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: (response) => {
            console.log(response.data);
            setReservations(response.data);
        },
        onError: (error) => {
            console.log(error);
        },
    });

    return (
        <div>
            <ul>
            {reservations.map((reservation, index) => (
                    <li key={index}>
                        <p>Trainer ID: {reservation.trainerId}</p>
                        <p>Today: {reservation.today}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodayReservation;