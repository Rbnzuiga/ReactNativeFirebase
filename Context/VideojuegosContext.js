import React, {createContext, useState, useEffect} from 'react';
import firebase from '../Settings/ConfigFirebase';

export const VideojuegosContext = createContext();

const VideojuegosProvider = (props) =>{
const [videojuego, setVideojuego] = useState({
    codigo:"",
    nombre:"",
    genero:""

})
const [lista, setLista]= useState([]);
useEffect(()=>{
firebase.database().ref('videojuegos').on('value', snapshot=>{
    let videojuegosLista=[];
    snapshot.forEach(row=>{
        videojuegosLista.push({
            codigo:row.key,
            nombre:row.val().nombre,
            genero:row.val().genero
        })
    })

setLista(videojuegosLista)

})



},[])
const eliminar = (id)=>{
firebase.database().ref('videojuegos/'+ id).set(null).then(()=>{
    alert("Eliminado")
})


    const temporal = lista.filter ((item)=>{
        return item.codigo!==id;


    })
    setLista(temporal)
}
return(
<VideojuegosContext.Provider    
 value={{
        videojuego,
        lista,
        setVideojuego,
        setLista,
        eliminar
    }}
    
    >
     {props.children}

</VideojuegosContext.Provider>



)

}
export default VideojuegosProvider