//Importar React
import React from 'react'
import ReactDOM from 'react-dom/client'
//Importar React/React-Dom/React-Router
import { Route, Routes, BrowserRouter } from 'react-router-dom'
//Importar Componentes
import Header from './components/Header'
import Footer from './components/Footer'
//Importar CSS
import './index.css'
//Importar Pages
import MinhasDoacoes from './pages/MinhasDoacoes'
import AgendarColeta from './pages/AgendarColeta'
import BuscarPublicacoes from './pages/BuscarPublicacoes'
import ColetasAgendadas from './pages/ColetasAgendadas'
import ColetasFinalizadas from './pages/ColetasFinalizadas'
import ColetasConfirmada from './pages/ColetasConfirmada'
import ConfirmarColeta from './pages/ConfirmarColeta'
import Contato from './pages/Contato'
import DoacoesFinalizadas from './pages/DoacoesFinalizadas'
import Duvidas from './pages/Duvidas'
import EditarPefilColetor from './pages/EditarPefilColetor'
import EditarPerfilDoador from './pages/EditarPerfilDoador'
import Informativo from './pages/Informativo'
import Login from './pages/Login'
import NossaHistoria from './pages/NossaHistoria'
import PaginaInicial from './pages/PaginaInicial'
import QueroDoarParte1 from './pages/QueroDoarParte1'
import Servicos from './pages/Servicos'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter> 
      <Header />
      <Routes>
        <Route path='/minhasdoacoes' element={ <MinhasDoacoes /> } />
        <Route path='/agendarcoleta' element={ <AgendarColeta/> }/>
        {/* <Route path='/buscarpublicacoes/:idUsuario' element={ <BuscarPublicacoes /> } /> */}
        <Route path='/buscarpublicacoes' element={ <BuscarPublicacoes /> } />
        <Route path='/editarperfilcoletor' element={ <EditarPefilColetor /> } />
        <Route path='/coletasagendadas' element={ <ColetasAgendadas/> }/>
        <Route path='/coletasfinalizadas' element={ <ColetasFinalizadas /> } />
        <Route path='/coletasconfirmada' element={ <ColetasConfirmada /> } />
        <Route path='/confirmarcoleta' element={ <ConfirmarColeta /> } />
        <Route path='/contato' element={ <Contato /> } /> 
        <Route path='/doacoesfinalizadas' element={ <DoacoesFinalizadas /> } />
        <Route path='/duvidas' element={ <Duvidas /> } />
        <Route path='/editarperfildoador' element={ <EditarPerfilDoador /> } /> 
        <Route path='/informativo' element={ <Informativo /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/nossahistoria' element={ <NossaHistoria /> } />
        <Route path='/' element={ <PaginaInicial /> } /> 
        <Route path='/querodoarpt1' element={ <QueroDoarParte1 /> } /> 
        <Route path='/servicos' element={ <Servicos /> } /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)