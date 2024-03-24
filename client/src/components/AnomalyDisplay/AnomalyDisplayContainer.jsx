import { useEffect, useState } from "react";
import { fetchAnomalies, fetchGenes } from "../../utils/fetcher";
import { Spin } from "antd";
import AnomalyDisplay from "./AnomalyDisplay";

const containerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
};

const AnomalyDisplayContainer = () => {
    const [genes, setGenes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getGenes();
    }, []);

    const getGenes = () => {
        fetchGenes()
        .then(res => {
            setGenes(res.map(gene => ({label: gene.gene, value:gene.gene})))
        })
        .catch(e => console.log(e))
        .finally(() => setLoading(false));
    };

    return (
        <div style={containerStyles}>
            {
                genes.length
                    ? <AnomalyDisplay data={genes} />
                    : (
                        <div style={{ display: 'flex', flexDirection: 'columnt', justifyContent: 'center', alignItems: 'center' }}>
                            <Spin size="large" />
                        </div>
                    )
            }
        </div>
    )
};

export default AnomalyDisplayContainer;