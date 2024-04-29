import React, { useEffect, useState } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import getWeeksOfMonthObjects from "../../../utils/makeWeekStringByDate";
import { useQuery } from "react-query";
import { getMonthReservationsCountRequest } from "../../../apis/api/admin";
function AdminReservationChart(props) {
    ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
    const [weekReservaionCounts, setWeekReservationCounts] = useState([]);
    const [chartData, setChartData] = useState();
    const weeksOfMonth = getWeeksOfMonthObjects(new Date());
    const getMonthReservationsCountQuery = useQuery(
        ["getMonthReservationsCountQuery"],
        async () => {
            const requests = weeksOfMonth.map((week) =>
                getMonthReservationsCountRequest({
                    startDate: week.startDate,
                    endDate: week.endDate,
                })
            );
            const responses = await Promise.all(requests);
            return responses;
        },
        {
            retry: 0,
            refetchOnWindowFocus: false,
            enabled: !!weeksOfMonth,
            onSuccess: (responses) => {
                responses.map((response) => setWeekReservationCounts((prev) => [...prev, response.data]));
            },
        }
    );

    useEffect(() => {
        console.log(weekReservaionCounts.forEach((data) => console.log(data)));
    }, [weekReservaionCounts]);

    const month = new Date().getMonth() + 1;
    const options = {
        responsive: false,
        interaction: {
            intersect: false,
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
        },
        plugins: {
            legend: {
                position: "bottom",
            },
        },
    };
    const data = {
        labels: [`${month}월 1째주`, `${month}월 2째주`, `${month}월 3째주`, `${month}월 4째주`],
        datasets: [
            {
                label: "트레이너1",
                data: [1, 5, 3],
                borderColor: "aqua",
                backgroundColor: "white",
            },
            {
                label: "트레이너2",
                data: ["2", "3", "9"],
                borderColor: "green",
                backgroundColor: "white",
            },
        ],
    };
    return <Line options={options} data={data} />;
}

export default AdminReservationChart;
