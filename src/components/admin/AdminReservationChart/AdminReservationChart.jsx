import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
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
import { useQuery } from "react-query";
import { getMonthReservationsCountRequest } from "../../../apis/api/admin";
import { colors } from "./color";

const layout = css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

function AdminReservationChart(props) {
    ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
    const [chartData, setChartData] = useState([]);
    
    const getMonthReservationsCountQuery = useQuery(
        ["getMonthReservationsCountQuery"],
        getMonthReservationsCountRequest,
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                setChartData(() =>
                    response.data.map((data, index) => {
                        return {
                            label: data.trainerName,
                            data: [data.firstWeekCount, data.secondWeekCount, data.thirdWeekCount, data.forthWeekCount],
                            borderColor: colors[index],
                            backgroundColor: "white",
                        };
                    })
                );
            },
        }
    );

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
        datasets: chartData,
    };
    return (
        <div css={layout}>
            <Line options={options} data={data} style={{ width: "90%" }} />
        </div>
    );
}

export default AdminReservationChart;
