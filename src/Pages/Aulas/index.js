import React, {useState, useEffect} from 'react'
import './style.css'

// Import React Router Dom
import { Link } from 'react-router-dom'

// Import React Router 
import { useLocation } from 'react-router'

// Import Firestore API
import { getAulas } from '../../Firebase/API/Firestore'

export default function Aulas(){

    const pathName = useLocation().pathname
    const cursoId = pathName.split('/')[1]
    const moduloId = pathName.split('/')[2]

    const [aulas, setAulas] = useState([])
    useEffect(()=>{
        if(cursoId != null && moduloId != null){
            getAulas(cursoId, moduloId, setAulas )
        }
    },[])
    return(
        <div>
            <header>
                <h1>Escolha sua Aula</h1>
            </header>
            
            {
                aulas.map((item, key) => {
                    const url = pathName + `/${item.id}`
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