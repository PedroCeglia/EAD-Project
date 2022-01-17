import React, {useState, useEffect} from 'react'
import './style.css'

// Import React Router Dom
import { Outlet } from 'react-router-dom'

// Import React Router
import { useLocation, useNavigate } from 'react-router'

// Import Youtube API
import {apiYoutube} from '../../Axios/YoutubeAPI'


export default function Modulos(props){
    
    const pathName = useLocation().pathname
    const cursoId = pathName.split('/')[1]
    
    const [curso, setCurso] = useState([])
    useEffect(()=>{
        if(cursoId != null){
            apiYoutube.get('/playlistItems',{
                params:{
                    playlistId: cursoId
                }
            }).then((result)=>{
                 setCurso(result.data.items)
            })
        }
    },[])

    const navigate = useNavigate()

    function openVideo(item, url, key){
        props.setAula(item)
        navigate(url)
    }
    
    return(
        <div className='modulo-main'>
            <div className='modulos'>
                <header>
                    <h1>Escolha seu Modulo</h1>
                </header>
                
                {
                    curso.map((item, key) => {
                        const url = '/' + cursoId + `/${item.snippet.resourceId.videoId}`
                        return(
                            <div className='link-container' key={key}>
                                <button onClick={()=>{openVideo(item, url)}} >
                                    <img src={item.snippet.thumbnails.default.url} alt='Video Aula Thumbnail'/>
                                    <div>
                                        <h2>{item.snippet.title}</h2>
                                        <p>{item.snippet.title.description}</p>
                                    </div>
                                </button>
                            </div>
                        )
                    })
                }
            </div>   
            <Outlet/>         
        </div>

    )
}