import React, { useEffect, useState } from "react";
import api from "../api";

export default function ConsultarMotorista() {

    const [motorista, setMotorista] = useState([]);

    useEffect(() => {
        async function pegaMotoristas() {
            const resposta = await api.get("/motoristas");
            if (resposta.status === 200) {
                setMotorista(resposta.data);
            }
            console.log(resposta.data);
        }
        pegaMotoristas();
    }, []);


    return (<table class="table">
        <thead class="thead-dark">
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Nome do Motorista</th>
                <th scope="col">Data de Nascimento</th>
                <th scope="col">CPF</th>
                <th scope="col">Modelo do carro</th>
                <th scope="col">Status</th>
                <th scope="col">Sexo</th>
            </tr>
        </thead>
        <tbody>
            {motorista.map((motorista) => (
                <tr>
                    <th>{motorista.id}</th>
                    <td>{motorista.cpf}</td>
                    <td>{motorista.nome}</td>
                    <td>{motorista.dataNascimento}</td>
                    <td>{motorista.modeloCarro}</td>
                    <td>{motorista.status}</td>
                    <td>{motorista.sexo}</td>
                </tr>
            ))}
        </tbody>
    </table>
    )
}