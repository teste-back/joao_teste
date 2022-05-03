import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <ul class="nav justify-content-center bg-dark">
                <li class="nav-item">
                    <Link to="/cadastro-cliente" class="nav-link active">Cadastro Cliente</Link>
                </li>
                <li class="nav-item">
                    <Link to="/cadastro-motorista" class="nav-link active">Cadastro Motorista</Link>
                </li>
                <li class="nav-item">
                    <Link to="/alterar-status" class="nav-link active">Alterar Status</Link>
                </li>
                <li class="nav-item">
                    <Link to="/registrar-corrida" class="nav-link active">Registrar Corrida</Link>
                </li>
                <li class="nav-item">
                    <Link to="/consulta-passageiro" class="nav-link active">Consultar Passageiros Cadastrados</Link>
                </li>
                <li class="nav-item">
                    <Link to="/consulta-motorista" class="nav-link active">Consultar Motoristas Cadastrados</Link>
                </li>
                <li class="nav-item">
                    <Link to="/consulta-corrida" class="nav-link active">Consultar Corridas</Link>
                </li>
            </ul>
        </>
    )
}