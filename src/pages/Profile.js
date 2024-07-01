import React from 'react';
import SaveDb from '../components/saveDb';
import CerrarSesion from '../components/CerrarSesion';
import Perfil from '../components/Perfil';

const userId = localStorage.getItem('tndm_id')
const userEmail = localStorage.getItem('tndm_email')
const token =  localStorage.getItem('tndm_token')
const Profile = () => {
const userId = localStorage.getItem('tndm_id')
const userEmail = localStorage.getItem('tndm_email')
const token =  localStorage.getItem('tndm_token')
    return (
        <div>
            {/* <SaveDb 
            data="qr contenido5" 
            nref="nombre del qr"
            desc="un qr contenido muy guay"
            userId= {userId}
            ></SaveDb> */}
            <CerrarSesion/>
            <Perfil
            email={'tndm_email'}
            id={'tndm_id'}
            token={'tndm_token'}
            />

        </div>
    );
};
export default Profile;