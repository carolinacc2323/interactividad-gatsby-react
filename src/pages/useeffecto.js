import React, { useState, useEffect } from 'react'
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Seo from "../components/seo"

const useEffecto = () =>{
  const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsuarios(data));
  }, []); // Se ejecuta solo al montarse el componente pues el array de dependencias está vacío
  console.log(usuarios)
  return(

  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
  )
}

// export const Head = () => <Seo title="Page two" />

export default useEffecto
