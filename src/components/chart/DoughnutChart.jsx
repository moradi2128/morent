import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);
const data = {
    labels: [
        'اسپورت',
        'SUV',
        'موپه',
        'هاچ بک',
        'MPV',
    ],
    backgroundColor: [
        "#0D3559",
        "#175D9C",
        "#2185DE",
        "#63A9E8",
        "#A6CEF2",
    ],
    datasets: [{
        // label: "hi",
        data: [100, 60, 80, 60, 30],
        backgroundColor: [
            "#0D3559",
            "#175D9C",
            "#2185DE",
            "#63A9E8",
            "#A6CEF2",
        ],
        hoverOffset: 4
    }]
};
const options = {
    responsive: true,
    cutoutPercentage: 80,
    percentageInnerCutout: 70,
    element: {
        ardc: {
            weight: 2,
            borderWidth: 4
        },
    },
    cutout: "85%",
    borderRadius: 10,
    spacing: 10,
    // plugins: {
    //     legend: {
    //         labels: {
    //             generateLabels: (chart) => {
    //                 return chart.data.dataets.map((dataset, index) => ({
    //                     text: dataset.label,
    //                     fillStyle: dataset.backgroundColor,
    //                     strokeStyle:dataset.borderColor,
    //                     hidden
    //                 }))
    //             }
    //         }
    //     }
    // }
}

const DoughnutChart = () => {
    return (
        <Doughnut
            data={data}
            width={100}
            height={100}
            options={options}
        />
    )
}

export default DoughnutChart


