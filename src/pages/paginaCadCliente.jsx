import Navbar from "../components/navbar"
import CadCliente from "../components/cadastroCliente"
import api from '../api';


export default function Index() {
    return (
        <>
            <Navbar/>
            <CadCliente/>
        </>
    )
}