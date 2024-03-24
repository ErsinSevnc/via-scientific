import { Button, Table } from "antd";

const GeneTable = ({ expressionData }) => {

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
            render: () => (
                <Button type="primary">
                    Anaylsis
                </Button>
            )
        },
    ];

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '32px 0' }}>
                <h2>Gene Expressions</h2>
            </div>
            <Table
                columns={columns}
                dataSource={expressionData}
                scroll={'max-content'}
                rowKey={(record) => record.gene}
            />
        </div>
    )
};

export default GeneTable;