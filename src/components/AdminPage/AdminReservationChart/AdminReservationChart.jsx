import React from "react";
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
function AdminReservationChart(props) {
    ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
    console.log(getWeeksOfMonthObjects(new Date()));
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
                label: "data1",
                data: [1, 5, 3],
                borderColor: "aqua",
                backgroundColor: "white",
            },
            {
                label: "data2",
                data: ["2", "3", "9"],
                borderColor: "green",
                backgroundColor: "white",
            },
        ],
    };
    return <Line options={options} data={data} />;
}

export default AdminReservationChart;
