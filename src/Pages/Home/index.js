import React, {useState, useEffect} from 'react'
import './style.css'

// Import React Router Dom
import {Link} from 'react-router-dom'

// Import Firestore API
import { getCursos } from '../../Firebase/API/Firestore'

export default function Home(){
    const [cursos, setCursos] = useState([])
    useEffect(()=>{
        getCursos(setCursos)
    },[])
    return(
        <div>
            <header>
                <h1>Escolha seu Curso</h1>
            </header>
            
            {
                cursos.map((item, key) => {
                    const url = `/${item.id}`
                    return(
                        <div className='link-container' key={key}>
                            <Link to={url} >
                                <h2>{item.data().name}</h2>
                                <p>{item.data().descricao}</p>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}