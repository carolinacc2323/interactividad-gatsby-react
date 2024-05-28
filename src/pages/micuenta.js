import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { useAuth0 } from "@auth0/auth0-react"
import { withAuthenticationRequired } from '@auth0/auth0-react'
import LogoutButton from "../components/logoutbutton/logoutbutton"

const MiCuenta = () => {
/* 👇 Access user from the useAuth0 hook 👇 */
const { user } = useAuth0();
    return(
    <>
        <Layout>
            <div>
                <LogoutButton></LogoutButton>
            </div>
            <Link to="/">Home</Link>
            <p>Foto: {user.picture}</p>
            <p>Email: {user.email}</p>
            <p>Nombre: {user.name}</p>
        </Layout>
    </>
);
};

export default withAuthenticationRequired(MiCuenta);