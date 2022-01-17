import React, {useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// Import Pages
import Home from '../Pages/Home'
import Modulos from '../Pages/Modulos'
import Aula from '../Pages/Aula'

export default function Rotas(){

    const [aula, setAula] = useState('')

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/:nomeCursos' element={<Modulos setAula={setAula}/>}>
                    <Route path='/:nomeCursos/:nomeAula' element={<Aula aula={aula}/>}/>
                    <Route path='/:nomeCursos' element={<h1>Sem AUla Porra</h1>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}