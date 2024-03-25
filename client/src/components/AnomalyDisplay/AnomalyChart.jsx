import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


const AnomalyChart = ({ outliers }) => {

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Anomaly Chart',
            },
            tooltip: {
                callbacks: {
                    title: (context) => {
                        const matchedGene = outliers.find(outlier => outlier.gene === context[0].dataset.label)
                        if (matchedGene) {

                            return `${matchedGene.outlierValues[context[0].dataIndex].name}`
                        }
                    }
                }
            }
        },
    };
    const calculateLabelCounts = () => {
        let maxLength = 0;

        outliers.forEach(outlier => {
            if (outlier.outlierValues.length > maxLength) maxLength = outlier.outlierValues.length
        });
        return maxLength
    };
    const labels = new Array(calculateLabelCounts()).fill('outlier');

    const data = {
        labels,
        datasets: outliers.map(outlier => ({
            label: outlier.gene,
            data: outlier.outlierValues.map(expressionValue => expressionValue.value),
            borderColor: `rgb(${Math.floor(Math.random() * (255 - 25 + 1)) + 25}, 99, 132)`,
            backgroundColor: `rgba(${Math.floor(Math.random() * (255 - 25 + 1)) + 25}, 99, 132, 0.5)`,
        }))
    };

    return (
        <div style={{ display: 'flex', width: '100%' }}>
            <Line options={options} data={data} height={'250px'}/>
        </div>
    )
};

export default AnomalyChart;