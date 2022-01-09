// Import Database Reference
import {database} from '../../index'

// Import Database API`s
import { onValue, ref } from '@firebase/database'

export function getCursos(setCursos){
    onValue(ref(database,`cursos`), snapshot => {
        let cursoList = []
        if(snapshot.exists()){
            snapshot.forEach(item => {
                cursoList.push(item.val())
            })
        }
        setCursos(cursoList)
    })
}