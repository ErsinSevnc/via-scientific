import { Button, Table } from "antd";
import GeneAnalysisModal from "./GeneAnalysisModal";
import { useState } from "react";
import { fetchGeneAnalysis } from "../../utils/fetcher";

const GeneTable = ({ expressionData }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [geneValues, setGeneValues] = useState(undefined);

    const toggleModalDisplay = () => setIsModalVisible(!isModalVisible);
    const handleAnalysisClick = (geneRecord) => getGeneAnalysis(geneRecord.gene);

    const getGeneAnalysis = (gene) => {
        fetchGeneAnalysis(gene)
        .then(res => {
            setGeneValues(res)
            toggleModalDisplay();
        })
        .catch(e => console.log(e))
    };

    const columns = [
        {
            title: 'Gene',
            dataIndex: 'gene',
            key: 'gene',
        },
        {
            title: 'Expression 1',
            key: 'expressionValues1',
            render: (text, record) => <span>{record.expressionValues[0]}</span>
        },
        {
            title: 'Expression 2',
            key: 'expressionValues2',
            render: (text, record) => <span>{record.expressionValues[1]}</span>
        },
        {
            title: 'Expression 3',
            key: 'expressionValues3',
            render: (text, record) => <span>{record.expressionValues[2]}</span>
        },
        {
            title: 'Expression 4',
            key: 'expressionValues4',
            render: (text, record) => <span>{record.expressionValues[3]}</span>
        },
        {
            title: 'Expression 5',
            key: 'expressionValues5',
            render: (text, record) => <span>{record.expressionValues[4]}</span>
        },
        {
            title: 'Actions',
            key: 'analysis-btn',
            render: (text, record) => (
                <Button type="primary" onClick={() => handleAnalysisClick(record)}>
                    Anaylsis
                </Button>
            )
        },
    ];

    return (
        <div style={{width: '100%'}}>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '32px 0' }}>
                <h2>Gene Expressions</h2>
            </div>
            <Table
                columns={columns}
                dataSource={expressionData}
                scroll={{x: true}}
                rowKey={(record) => record.gene}
            />
            {
                isModalVisible && (
                    <GeneAnalysisModal isOpen={isModalVisible} onClose={toggleModalDisplay} geneData={geneValues}/>
                )
            }
        </div>
    )
};

export default GeneTable;