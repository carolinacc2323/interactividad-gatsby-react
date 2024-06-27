import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import FormRegistro from "../components/formregistro"


const RegistroPage = () => (
  <Layout>
    <h1>Página de Registro</h1>
    <FormRegistro/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)


export default RegistroPage
