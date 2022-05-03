import React, {useEffect, useState} from "react";
import api from "../api";
import {useForm} from "react-hook-form";

export default function CadastroMotorista() {

    const[passageiro, setPassageiro] = useState([]);
    const[motorista, setMotorista] = useState([]);
    const[campoPassageiro, setCampoPassageiro] = useState("");
    const[campoMotorista, setCampoMotorista] = useState("");
    const[campoValor, setCampoValor] = useState("");

    useEffect(() => {
        async function pegaPassageiros() {
            const resposta = await api.get("/passageiros");
            if (resposta.status === 200) {
                setPassageiro(resposta.data);
            }
            console.log(resposta.data);
        }

        async function pegaMotoristas() {
            const resposta = await api.get("/motoristas");
            if (resposta.status === 200) {
                    setMotorista(resposta.data);
            }
            console.log(resposta.data);
        }
        pegaPassageiros();
        pegaMotoristas();
    }, []);

    function Corrida(c) {
        c.preventDefault();
        
        api.post("/corridas", {
            fkPassageiro:campoPassageiro,
            fkMotorista:campoMotorista,
            valorCorrida:campoValor
        }).then((resposta) => {
            if (resposta.status === 201) {
                alert("Corrida cadastrada com sucesso!")
            } else if (resposta.status === 401) {
                alert("Corrida já cadastrada")
            }
        }).catch((erro) => {
            console.log(erro)
        })
    }

    return (
        <>
            <label>Passageiros cadastrados</label>
            <select class="form-control custom-select my-1 mr-sm-2" id="sexoCliente" aria-describedby="cadastroSexoCliente" required onChange={c => setCampoPassageiro(c.target.value)}>
                <option value="" selected>Selecione...</option>
                {passageiro.map((passageiro) => (
                    <option value={passageiro.id}>{passageiro.nome}</option>
                ))}
            </select>
            <label>Motoristas cadastrados</label>
            <select class="form-control custom-select my-1 mr-sm-2" id="sexoCliente" aria-describedby="cadastroSexoCliente" required onChange={c => setCampoMotorista(c.target.value)}>
                <option value="" selected>Selecione...</option>
                {motorista.map((motorista) => (
                    <option value={motorista.id}>{motorista.nome}</option>
                ))}
            </select>

            <div class="form-group">
                <label>Valor da Corrida</label>
                <input type="number" class="form-control" id="" aria-describedby="cadastroCpfCliente" placeholder="Valor da Corrida" required onChange={c => setCampoValor(c.target.value)}/>
            </div>

            <button type="submit" class="btn btn-primary" onClick={Corrida}>Cadastrar Corrida</button>
        </>
    )
}