import React from 'react'


const CerrarSesion = () => {
  const handleCerrarSesion =()=>{
    window.location.href='/';
    localStorage.removeItem('tndm_role');
    localStorage.removeItem('tndm_id');
    localStorage.removeItem('tndm_email');
    // localStorage.removeItem('tndm_token');
    window.location.href='/Login'
  }

  return (
    <>
      <button onClick={handleCerrarSesion}>Cerrar sesión</button>
    </>
  )
}

export default CerrarSesion