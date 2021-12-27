import React, {useState, useEffect} from 'react'
import './style.css'

// Import React Router Dom
import { Link } from 'react-router-dom'

// Import React Router
import { useLocation } from 'react-router'

// Import Firestore API
import { getModulos } from '../../Firebase/API/Firestore'

export default function Modulos(){
    
    const pathName = useLocation().pathname
    const cursoId = pathName.split('/')[1]
    
    const [modulos, setModulos] = useState([])
    useEffect(()=>{
        if(cursoId != null){
            getModulos(cursoId, setModulos)
        }
    },[])
    
    return(
        <div>
            <header>
                <h1>Escolha seu Modulo</h1>
            </header>
            
            {
                modulos.map((item, key) => {
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