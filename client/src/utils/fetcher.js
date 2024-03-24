const baseUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8080';

const fetchGeneExpressions = (geneList) => {
    return new Promise(async (res, rej) => {
        const response = await fetch(`${baseUrl}/expressions`, {
            method: 'POST',
            body: JSON.stringify({genes: geneList}),
            headers: { 'Content-Type': 'application/json' },
        });

        const data = await response.json();

        if (response.status === 200) {
            res(data);
            return;
        }

        rej(data.message)
    })
};

const fetchGeneAnalysis = (gene) => {
    return new Promise(async(res, rej) => {
        const response = await fetch(`${baseUrl}/gene-analysis`, {
            method: 'POST',
            body: JSON.stringify({gene}),
            headers: {'Content-Type': 'application/json'}
        });

        const data = await response.json();

        if (response.status === 200) {
            res(data);
            return;
        }

        rej(data.message);
    })
};

const fetchAnomalies = (genes) => {
    return new Promise(async(res, rej) => {
        const response = await fetch(`${baseUrl}/anomaly-detection`, {
            method: 'POST',
            body: JSON.stringify({genes}),
            headers: {'Content-Type': 'application/json'}
        });
        
        const data = await response.json();

        if (response.status === 200) {
            res(data);
        };

        rej(data.message);
    } )
};

const fetchGenes = () => {
    return new Promise(async(res, rej) => {
        const response = await fetch(`${baseUrl}/genes`);
        const data = await response.json();


        if (response.status === 200) {
            res(data);
        };

        rej(data.message);
    })
}

export {baseUrl, fetchGeneExpressions, fetchGeneAnalysis, fetchAnomalies, fetchGenes};