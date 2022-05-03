import React, { useEffect, useState } from "react";
import api from "../api";

export default function ConsultarCorridas() {

    const [corrida, setCorrida] = useState([]);

    useEffect(() => {
        async function pegaCorridas() {
            const resposta = await api.get("/corridas");
            if (resposta.status === 200) {
                setCorrida(resposta.data);
            }
            console.log(resposta.data);
        }
        pegaCorridas();
    }, []);


    return (<table class="table">
        <thead class="thead-dark">
            <tr>
                <th scope="col">Id da Corrida</th>
                <th scope="col">ID do Passageiro</th>
                <th scope="col">ID do Motorista</th>
                <th scope="col">Valor da corrida</th>
            </tr>
        </thead>
        <tbody>
            {corrida.map((corrida) => (
                <tr>
                    <th>{corrida.id}</th>
                    <td>{corrida.fkPassageiro}</td>
                    <td>{corrida.fkMotorista}</td>
                    <td>{corrida.valorCorrida}</td>
                </tr>
            ))}
        </tbody>
    </table>
    )
}