import React from 'react'
import CerrarSesion from './CerrarSesion'

const userId= localStorage.getItem('tndem_id');
const userEmail= localStorage.getItem('tndm_email');
const userToken = localStorage.getItem('tndm_token');

const Perfil = (id, email, token) => {

  return (
    <>
    <h1>Perfil de Tsuki</h1>
    <p>{userId}</p>
    <p>{userEmail}</p>
    <p>{userToken}</p>
    <CerrarSesion/>
    </>
  )
}

export default Perfil