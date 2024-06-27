import React, { useState, useEffect} from 'react'

// declaro 2 variables en un array
const Alumno = () =>{
    const[economia, setEconomia]=useState(-500)    
    const[feliz, setFelicidad]=useState(false)

    const darDinero = () =>{
        setEconomia(economia+100)
    }
    const hacerFeliz = () =>{
        !feliz ?setFelicidad(true):setFelicidad(false)
    }
    return(
        <>
            <button onClick={darDinero}>Hazme rico</button>
            <p>El alumno es {economia}</p>
            <button onClick={hacerFeliz}>Hazme feliz</button>
            <p>{feliz && <p>Soy más feliz que una perdiz</p>}</p>
        </>
    )
}
export default Alumno