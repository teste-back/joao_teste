import React, { useState } from "react";
import api from "../api";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";

export default function CadastroMotorista() {
    const [campo1, setCpf] = useState("");
    const [campo2, setNome] = useState("");
    const [campo3, setDataNascimento] = useState("");
    const [campo4, setModeloCarro] = useState("");
    const [campo5, setStatus] = useState("");
    const [campo6, setSexo] = useState("");

    const { register } = useForm();

    function Motorista(m) {
        m.preventDefault();

        if (campo1.length != 11) {
            alert("CPF não preenchido corretamente")
            return
        } else if (campo5 == "") {
            alert("Campo de status não preenchido corretamente")
            return
        } else if (campo6 == "") {
            alert("Campo de sexo não preenchido corretamente")
            return
        } else {
            api.post("/motoristas", {
                cpf: campo1,
                nome: campo2,
                dataNascimento: campo3,
                modeloCarro: campo4,
                status: campo5,
                sexo: campo6
            }).then((resposta) => {
                if (resposta.status === 201) {
                    alert("Motorista cadastrado com sucesso!")
                } else if (resposta.status === 401) {
                    alert("Cliente já cadastrado")
                }
            }).catch((erro) => {
                console.log(erro)
            })
        }
    }

    return (
        <>
            <form onSubmit={Motorista}>
                <div class="form-group">
                    <label>CPF</label>
                    <input type="number" class="form-control" placeholder="CPF apenas digitos" maxLength={11} onChange={m => setCpf(m.target.value)} required />
                </div>
                <div class="form-group">
                    <label>Nome</label>
                    <input type="text" class="form-control" placeholder="Nome" onChange={m => setNome(m.target.value)} minLength={3} maxLength={50} />
                </div>
                <div class="form-group">
                    <label>Data de Nascimento</label>
                    <input type="date" class="form-control" placeholder="Data de nascimento" onChange={m => setDataNascimento(m.target.value)} />
                </div>
                <div class="form-group">
                    <label>Modelo do Carro</label>
                    <input type="text" class="form-control" placeholder="Modelo do Carro" onChange={m => setModeloCarro(m.target.value)} minLength={3} maxLength={30} />
                </div>
                <div class="form-group">
                    <label>Status</label>
                    <select class="form-control custom-select my-1 mr-sm-2" onChange={m => setStatus(m.target.value)}>
                        <option value="" selected>Selecione...</option>
                        <option value="true">Ativo</option>
                        <option value="false">Desativado</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Sexo</label>
                    <select class="form-control custom-select my-1 mr-sm-2" onChange={m => setSexo(m.target.value)} required>
                        <option value="" selected>Selecione...</option>
                        <option value="M">Masculino</option>
                        <option value="F">Feminino</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Enviar</button>
            </form>
        </>
    )
}