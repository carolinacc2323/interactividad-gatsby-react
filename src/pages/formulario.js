import React, { useState } from "react"
import Layout from "../components/layout"

const Formulario = ()=>{
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [enviado, setEnviado] = useState(false)

    const [novalidado, setNoValidado] = useState(false)

    // al escribir en el formulario se lanzaría un evento
    const handleChangeName = (event)=>{
        setNombre(event.target.value)
    }
    const handleChangeEmail = (event)=>{
        setEmail(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        if(validar()){
            // Procesar el formulario, mandar a base de datos, procesar datos o generar un código qr
        console.log(nombre,email)
        // disparamos el mensaje
        setEnviado(true)
        }
    }

    function validar(){
        // alert('estas seguro que los datos son correctos')
        if(nombre||email ===''){
            setNoValidado(true)
            return false
        }
        return true
    }

    return(
        <>
            <Layout>
            <div>
                <p>Formulario de registro</p>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label> Escribe tu nombre
                            <input onChange={handleChangeName} value={nombre} type='text'/>
                        </label>
                    </div>
                    <div>
                    <label> Escribe tu correo
                        <input onChange={handleChangeEmail} value={email} type='text'/>
                    </label>
                    </div>
                    <button type='submit' disabled={enviado}>Registrate</button>
                </form> 
                {novalidado === true ? `No has escrito nada` : ""}
                {enviado ? `Gracias por tu registro ${nombre}` : ""}
            </div>
            </Layout>
        </>
    )
}

export default Formulario