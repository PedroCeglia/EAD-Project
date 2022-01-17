import React, {useState, useEffect} from 'react'
import './style.css'

// Import React Router Dom
import {Link} from 'react-router-dom'

// Import Firestore API
import { getCursos } from '../../Firebase/API/Firestore'

// Import YoutubeAPI
import {apiYoutube} from '../../Axios/YoutubeAPI'

export default function Home(){
    // Get Cursos In Firebase
    const [cursos, setCursos] = useState([])
    useEffect(()=>{
        getCursos(setCursos)
    },[])



    
    /*
    const [playListsAPI, setPlayListsAPI] = useState([])
    useEffect(()=>{
        if(cursos.length >= 0){    
            
            const listTeste = cursos.map(item => {
                
                apiYoutube.get('/playlistItems',{
                    params:{
                        playlistId: item.id
                    }
                }).then((result)=>{
                    return result.data
                })
            })
            setPlayListsAPI(listTeste)
        }   
    },[cursos])
    */

    return(
        <div>
            <header>
                <h1>Escolha seu Curso</h1>
            </header>
            
            {
                cursos.map((item, key) => {
                    console.log(item)
                    const url = `/${item.id}`
                    return(
                        <div className='link-container' key={key}>
                            <Link to={url} >
                                <h2>{item.nome}</h2>
                                <p>{}</p>
                            </Link>
                        </div>
                    )
                })
            }
 
        </div>
    )
}
/*           <main>
                {//<iframe src={video1} allowFullScreen title='Aula 1'/>
                }
            </main>*/