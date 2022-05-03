import React, { useState } from "react";
import api from "../api";
import { useForm } from "react-hook-form";

export default function CadastroCliente() {

    const [campo1, setCpf] = useState("");
    const [campo2, setNome] = useState("");
    const [campo3, setDataNascimento] = useState("");
    const [campo4, setSexo] = useState("");

    const { register } = useForm();

    function Cliente(e) {
        e.preventDefault();

        if (campo1.length != 11) {
            alert("CPF não preenchido corretamente")
            return
        } else if (campo4 == "") {
            alert("Campo de sexo não preenchido corretamente")
            return
        } else {
            api.post("/passageiros", {
                cpf: campo1,
                nome: campo2,
                dataNascimento: campo3,
                sexo: campo4
            }).then((resposta) => {
                if (resposta.status === 201) {
                    alert("Usuario cadastrado com sucesso!")
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
            <form onSubmit={Cliente}>
                <div class="form-group">
                    <label>CPF</label>
                    <input type="number" class="form-control" placeholder="CPF" required onChange={e => setCpf(e.target.value)} maxLength={11}/>
                </div>
                <div class="form-group">
                    <label>Nome</label>
                    <input type="text" class="form-control" placeholder="Informe nome e sobrenome" required onChange={e => setNome(e.target.value)} minLength={3} maxLength={50}/>
                </div>
                <div class="form-group">
                    <label>Data de Nascimento</label>
                    <input type="date" class="form-control" placeholder="Data de nascimento" required onChange={e => setDataNascimento(e.target.value)} />
                </div>
                <div class="form-group">
                    <label>Sexo</label>
                    <select class="form-control custom-select my-1 mr-sm-2" required onChange={e => setSexo(e.target.value)}>
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