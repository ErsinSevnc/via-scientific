import { Button, Select, Space, message } from "antd";
import { useState } from "react";
import GeneTable from "./GeneTable";
import { fetchGeneExpressions } from "../../utils/fetcher";

const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'start',
    height: '100%'
}

const GeneDisplay = ({ genes }) => {
    const [messageApi, contextHolder] = message.useMessage();
    const [selectedGenes, setSelectedGenes] = useState([]);
    const [expressions, setExpressions] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleGeneSelect = (geneValues) => setSelectedGenes(geneValues);
    const handleFilterClick = () => {
        setLoading(true);
        fetchGeneExpressions(selectedGenes)
        .then(res => {
            messageApi.success('Success')
            setExpressions(res)
        })
        .catch(e => messageApi.error(e))
        .finally(() => setLoading(false))
    };

    return (
        <div style={containerStyles}>
            {contextHolder}
            <Space direction="vertical" size="large">
                <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                    <Select
                        mode="multiple"
                        allowClear
                        placeholder='Please Select Genes'
                        options={genes}
                        style={{ width: '70%' }}
                        onChange={handleGeneSelect}
                    />
                    <Button type="primary" onClick={handleFilterClick} loading={loading} disabled={!selectedGenes.length}>
                        Filter
                    </Button>
                </div>
                <div style={{ width: '100%' }}>
                    <GeneTable expressionData={expressions} />
                </div>
            </Space>
        </div>
    )
}

export default GeneDisplay;