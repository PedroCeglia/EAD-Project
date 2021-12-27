import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// Import Pages
import Home from '../Pages/Home'
import Modulos from '../Pages/Modulos'
import Aulas from '../Pages/Aulas'
import Aula from '../Pages/Aula'

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/:nomeCursos' element={<Modulos/>}/>
                <Route path='/:nomeCurso/:nomeModulos' element={<Aulas/>}/>
                <Route path='/:nomeCurso/:nomeModulos/:nomeAula' element={<Aula/>}/>
            </Routes>
        </BrowserRouter>
    )
}