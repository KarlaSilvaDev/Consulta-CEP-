import React, { useState } from 'react'
import axios from 'axios'

const ConsultaCEP = () => {
    const [cep, setCep] = useState('');
    const [dadosCep, setDadosCep] = useState(null);

    const consultarCEP = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:5000/api/consulta_cep/${cep}`)
            setDadosCep(response.data)
        } catch (error) {
            console.error(`Erro ao consultar o CEP: ${error}`);
        }
    };

    return (
        <div>
            <h1>Consulta CEP</h1>
            <input type="text" value={cep} onChange={(e) => setCep(e.target.value)} />
            <button onClick={consultarCEP}>Consultar</button>

            {dadosCep && (
                <div>
                    <h2>Dados do Cep</h2>
                    <pre>{JSON.stringify(dadosCep, null, 2)}</pre>
                </div>
            )}
        </div>
    )
}

export default ConsultaCEP;

