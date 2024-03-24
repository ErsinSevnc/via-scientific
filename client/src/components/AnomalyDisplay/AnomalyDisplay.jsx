import { Select, Button, message } from "antd";
import { useState } from "react";
import { fetchAnomalies } from "../../utils/fetcher";
import AnomalyChart from "./AnomalyChart";

const AnomalyDisplay = ({ data }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [selectedGenes, setSelectedGenes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [outliers, setOutliers] = useState([]);

  const suffix = (
    <>
      <span>
        {selectedGenes.length} / 10
      </span>
    </>
  );

  const handleGeneSelect = (geneValues) => {
    setSelectedGenes(geneValues);
  };

  const handleDetecAnomalyClick = () => {
    setLoading(true);
    fetchAnomalies(selectedGenes)
      .then(res => {
        messageApi.success('Success')
        setOutliers(res.outliers)
      })
      .catch(e => messageApi.error(e))
      .finally(() => setLoading(false))
  };


  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      {contextHolder}
      <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
        <Select
          mode="multiple"
          suffixIcon={suffix}
          maxCount={10}
          allowClear
          placeholder='Please Select Genes up to 10'
          options={data}
          value={selectedGenes}
          style={{ width: '70%' }}
          onChange={handleGeneSelect}
          onClear={() => {
            setSelectedGenes([]);
            setOutliers([]);
          }}
        />
        <Button type="primary" onClick={handleDetecAnomalyClick} loading={loading} disabled={!selectedGenes.length}>
          Anomaly Analysis
        </Button>
      </div>
      {
        outliers.length ? (<AnomalyChart outliers={outliers}/>) : null
      }
    </div>
  )
};

export default AnomalyDisplay;