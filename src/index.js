import 'bootstrap/dist/css/bootstrap.css';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Index from "./pages/index"
import CadCliente from "./pages/paginaCadCliente"
import CadMotorista from "./pages/paginaCadMotorista"
import AlterarStatus from './pages/paginaAlterarStatus'
import RegistrarCorrida from "./pages/paginaRegistrarCorrida"
import ConsultaPassageiro from "./pages/paginaConsultaPassageiro"
import ConsultaMotorista from './pages/paginaConsultaMotorista';
import ConsultaCorrida from "./pages/paginaConsultarCorrida"

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='/cadastro-cliente' element={<CadCliente />} />
      <Route path='/cadastro-motorista' element={<CadMotorista />} />
      <Route path='/alterar-status' element={<AlterarStatus />} />
      <Route path='/registrar-corrida' element={<RegistrarCorrida />} />
      <Route path='/consulta-passageiro' element={<ConsultaPassageiro />} />
      <Route path='/consulta-motorista' element={<ConsultaMotorista />} />
      <Route path='/consulta-corrida' element={<ConsultaCorrida />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);