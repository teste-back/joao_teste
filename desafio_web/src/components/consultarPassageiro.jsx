import React, { useEffect, useState } from "react";
import api from "../api";

export default function ConsultarPassageiro() {

    const [passageiro, setPassageiro] = useState([]);

    useEffect(() => {
        async function pegaPassageiros() {
            const resposta = await api.get("/passageiros");
            if (resposta.status === 200) {
                setPassageiro(resposta.data);
            }
            console.log(resposta.data);
        }
        pegaPassageiros();
    }, []);


    return (<table class="table">
        <thead class="thead-dark">
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Nome do Passageiro</th>
                <th scope="col">Data de Nascimento</th>
                <th scope="col">CPF</th>
                <th scope="col">Sexo</th>
            </tr>
        </thead>
        <tbody>
            {passageiro.map((passageiro) => (
                <tr>
                    <th>{passageiro.id}</th>
                    <td>{passageiro.cpf}</td>
                    <td>{passageiro.nome}</td>
                    <td>{passageiro.dataNascimento}</td>
                    <td>{passageiro.sexo}</td>
                </tr>
            ))}
        </tbody>
    </table>
    )
}