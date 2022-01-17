// Import Firestore Referece
import { firestore } from "../..";

// Import Firestore API´s
import {onSnapshot, collection} from 'firebase/firestore'

// Get Cursos From Firestore
export function getCursos(setCursos){
    onSnapshot(collection(firestore,`cursos`),
        snapshot => {
            let listCurso = []
            snapshot.forEach(item => {
                listCurso.push(item.data())
            })
            setCursos(listCurso)
    })
}
// Get Modulos From Firestore
export function getModulos(idCurso, setModulos){
    onSnapshot(collection(firestore,`cursos/${idCurso}/modulos`),
        snapshot => {
            let listModulos = []
            snapshot.forEach(item => {
                listModulos.push(item)
            })
            setModulos(listModulos.sort((a, b) => (a.data().key - b.data().key)))
    })
}
// Get Aulas From Firestore
export function getAulas(idCurso, idModulo, setAulas){
    onSnapshot(collection(firestore,`cursos/${idCurso}/modulos/${idModulo}/aulas`),
        snapshot => {
            let listAulas = []
            snapshot.forEach(item => {
                listAulas.push(item)
            })
            setAulas(listAulas.sort((a, b) => (a.data().key - b.data().key)))
    })
}
// Get Aula From Firestore
export function getAula(idCurso, idModulo, idAula, setAula){
    onSnapshot(collection(firestore,`cursos/${idCurso}/modulos/${idModulo}/aulas`),
        snapshot => {
            snapshot.forEach(item =>{
                if(item.id === idAula){
                    setAula(item.data())
                }
            })
        }
    )
}