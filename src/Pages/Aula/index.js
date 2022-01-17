import React, {useState, useEffect} from 'react'
import './style.css'

// Import React Router
import { useLocation } from 'react-router'

// Import FireStore API
import { getAula } from '../../Firebase/API/Firestore'

export default function Aula(props){

    const pathName = useLocation().pathname
    const cursoId = pathName.split('/')[1]
    const aulaId = pathName.split('/')[2]

    const aula = props.aula
    useEffect(()=>{console.log(aula)},[aula])

    //
    const [aulaName, setAulaName] = useState('Aula Name')
    const [aulaUrl, setAulaUrl] = useState('')

    useEffect(()=>{
        if(aula != null){
            setAulaUrl(aulaId)
            if(aula.snippet != null){
                setAulaName(aula.snippet.title)
            } else{
                setAulaName("Nome Aula")
            }
        }
    },[aula])


    return(
        <div className='aula-container'>
            <div className='aula-header'>
                <h2>{aulaName}</h2>
            </div>
            <div className='aula-main'>
                <iframe src={`http://www.youtube.com/embed/${aulaId}?autoplay=1`}/>
            </div>
            <div className='aula-footer'>
                <h2>Perguntas</h2>
                <div className='pergunta-container'>
                    <div className='pergunta-content'>
                        <p>Como faz coisa x?</p>
                    </div>
                    <div className='pergunta-content'>
                        <p>Como faz coisa x?</p>
                    </div>
                    <div className='pergunta-content'>
                        <p>Como faz coisa x?</p>
                    </div>
                    <div className='pergunta-content'>
                        <p>Como faz coisa x?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}