import React from 'react';
import CerrarSesion from '../components/cerrarsesion';
import Layout from "../components/layout";
import Perfil from '../components/perfil';
import UploadUserImage from '../components/uploaduserimage';

const Profile = () => {
  const rutaimg = 'http://localhost/api-qr-tandem/images/users/'+ localStorage.getItem('tandem_img_user')
    return (
        <>
        <Layout>
        <CerrarSesion/>
        <Perfil
          email={ localStorage.getItem('tndm_email')}
          id={localStorage.getItem('tndm_id')}
          role ={localStorage.getItem('tndm_role')}
        />
        <UploadUserImage idUser={localStorage.getItem('tndm_id')}></UploadUserImage>
        <p><img width={80} src={rutaimg}/>¡Hola <strong>{localStorage.getItem('tandem_nombre')}</strong>!</p>
        </Layout>
        </>
    );
};
export default Profile