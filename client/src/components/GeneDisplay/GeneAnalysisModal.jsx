import { Modal, Tag } from "antd";
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const GeneAnalysisModal = ({ isOpen, geneData, onClose }) => {

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: `Gene Expressions`,
            },
        },
    };

    const labels = ['Expression 1', 'Expression 2', 'Expression 3', 'Expression 4', 'Expression 5'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Expression Values',
                data: geneData.expressionValues,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                labels: ['Expression 1', 'Expression 2', 'Expression 3', 'Expression 4', 'Expression 5']
            }
        ],
    };

    return (
        <Modal
            title={`${geneData.gene} Analysis`}
            open={isOpen}
            closable
            onCancel={onClose}
            centered
            footer={null}
            width={window.innerWidth > 650 ? '50%' : '100%'}
        >
            <div style={{display: 'flex', flexWrap: 'wrap', margin: '16px 0', gap: '6px' }}>
                <Tag color="blue">mean: {geneData?.mean}</Tag>
                <Tag color="blue">median: {geneData?.median}</Tag>
                <Tag color="blue">variance: {geneData?.variance}</Tag>
            </div>
            <Bar data={data} options={options} height={'250px'}/>
        </Modal>
    )
};

export default GeneAnalysisModal