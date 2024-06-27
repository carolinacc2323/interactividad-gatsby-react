import React, { useState } from 'react';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import 'bootstrap/dist/css/bootstrap.min.css'
import ContactoCollapse from "../components/contactocollapse"
import TandemModal from "../components/tandemodal"
import TandemSlider from "../components/tandemslider.js"
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap"
import Alumno from "../components/alumno.js"
import MiMapa from "../components/mimapa.js"


const IndexPage = () => {
//   function saludar(amigo){
//     alert (`Hola ${amigo}`)
//   }
//   function saludar2 (){
//     alert('Eres un ternurín')
// }
const [latLng, setLatLng] = useState(null);

  return(
  <>
  <Layout>
    <h1 className="display-1 text-center">Aplicación bootstrap</h1>

    <ContactoCollapse/>
    <TandemModal/>
    <TandemSlider/>
    <div class="row">
      <div class='col'>1</div>
      <div class='col'>2</div>
      <div class='col'>3</div>
      <div class='col'>4</div>
      <div class='col-2'>
        <Button color="primary">Click me</Button>
      </div>
      <div>
      <Button
        id="Popover1"
        type="button"
      >
        Launch Popover
      </Button>
      <Popover
        flip
        target="Popover1"
        toggle={function noRefCheck(){}}
      >
        <PopoverHeader>
          Popover Title
        </PopoverHeader>
        <PopoverBody>
          Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
        </PopoverBody>
      </Popover>
      </div>
    </div>
    <hr/>
    <Alumno/>
    <div>

          <MiMapa setLatLng={setLatLng} />
          <div className="coordinates">
            {latLng ? (
              <p>
                Latitud: {latLng.lat}, Longitud: {latLng.lng}
              </p>
            ) : (
              <p>Haz clic en el mapa para obtener las coordenadas</p>
            )}
          </div>
        </div>
    
  </Layout>
  </>
  )
}

// export const Head = () => <Seo title="Home" />

export default IndexPage

/* <div>
    <LoginButton></LoginButton>
    </div>
    
    <button className='btn' onClick={()=>alert('Has hecho click')}>Haz click</button>
    <button onClick={()=>saludar('Millie')}>Haz click otra vez</button>
    <button onClick={function(){saludar('Pauly D')}}>Saludar a Pauly D</button>
    <button onClick={()=>{
      saludar('Vinnie')
      saludar('Todo el mundo')
    }}>Saludar a Vinnie</button>
    <LigthSwicth>
    </LigthSwicth>

    <AlertButton message = 'Holi perre verge'>
      Saluda
    </AlertButton>

    <Button action= 'saludar'>
      Hazme reir
    </Button>
    <br></br>
    <Contador></Contador>
    <br></br>
    <LigthDark>
      <p>Hola Perris, soy el amor de tu vida</p>
    </LigthDark>
    <FormCapName></FormCapName> */