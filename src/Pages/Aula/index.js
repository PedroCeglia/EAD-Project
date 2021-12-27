import React, {useState, useEffect} from 'react'
import './style.css'

// Import React Router
import { useLocation } from 'react-router'

// Import FireStore API
import { getAula } from '../../Firebase/API/Firestore'

export default function Aula(){

    const pathName = useLocation().pathname
    const cursoId = pathName.split('/')[1]
    const moduloId = pathName.split('/')[2]
    const aulaId = pathName.split('/')[3]

    const [aula, setAula] = useState([])
    useEffect(()=>{
        if(cursoId != null && moduloId != null && aulaId != null){
            getAula(cursoId, moduloId, aulaId, setAula)
        }
    },[])
    const [aulaName, setAulaName] = useState('Aula Name')
    useEffect(()=>{
        if(aula != null){
            setAulaName(aula.name)
        }
    },[aula])
    return(
        <div>
            <header>
                <h1>{aulaName}</h1>
            </header>
        </div>
    )
}