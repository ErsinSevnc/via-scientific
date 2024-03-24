import { useEffect, useState } from "react";
import GeneDisplay from "./GeneDisplay";
import {baseUrl} from '../../utils/fetcher';
import { Spin } from 'antd';

const containerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
}

const GeneDisplayContainer = () => {
    const [genes, setGenes] = useState([]);

    useEffect(() => {
        fetchGenes()
    }, []);

    const fetchGenes = async () => {
        const response = await fetch(`${baseUrl}/genes`);
        const genes = await response.json();
        const mappedGenes = genes.map(gene => {
            return {
                label: gene.gene,
                value: gene.gene
            }
        });
        setGenes(mappedGenes);
    };

    return (
        <div style={containerStyles}>
            {
                genes.length
                    ? <GeneDisplay genes={genes}/>
                    : <div style={{display: 'flex', flexDirection: 'columnt', justifyContent: 'center', alignItems: 'center'}}>
                        <Spin size="large"/>
                    </div>
            }
        </div>
    )
};

export default GeneDisplayContainer;