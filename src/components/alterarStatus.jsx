import React, {useEffect, useState} from "react";
import api from "../api";

export default function AlterarStatus() {

    const [motorista, setMotorista] = useState([]);
    const[campoMotorista, setCampoMotorista] = useState("");

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

    function Motorista(m) {
        m.preventDefault();
        const url = "/motoristas/"+campoMotorista
        console.log(url)
        api.put(url).then((resposta) => {
            if (resposta.status === 200) {
                alert("Alteração realizada com sucesso")
            } else if (resposta.status === 204) {
                alert("Falha na aplicação")
            }
        }).catch((erro) => {
            console.log(erro)
            alert("Favor selecionar motorista")
        })
    }

    return (
        <>
            <label>Motoristas cadastrados</label>
            <select class="form-control custom-select my-1 mr-sm-2" required onChange={m => setCampoMotorista(m.target.value)}>
                <option value="" selected>Selecione...</option>
                {motorista.map((motorista) => (
                    <option value={motorista.id}>{motorista.nome}</option>
                ))}
            </select>

            <button type="submit" class="btn btn-primary" onClick={Motorista}>Alterar Status</button>
        </>
    )
}