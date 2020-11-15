import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './general.scss';
import Work from './components/work'
import AboutMe from './components/aboutMe'
import Studies from './components/studies'
import SecondaryStudies from './components/secondaryStudies'
import Header from './components/header'
import Abilities from './components/abilities'
import Language from './components/languages'
import Certificates from './components/certificates'
import OtherInterests from './components/otherInterest'

function App() {
  return (
    <div className="App">
      <div id="body">
        <div className="module">
          <Header />
        </div>

        <div id='container'>
          <div id='mainBody'>
            <div className='module'>
              <div className='subtitle'>Sobre Mí</div>
              <AboutMe />
            </div>

            <div className='module'>
              <div className='subtitle'>Experiencia Laboral<FontAwesomeIcon icon="plus" /></div>  
              <Work /> 
            </div>

            <div className='module'>
              <div className='subtitle'>Formación Académica<FontAwesomeIcon icon="plus" /></div>  
              <Studies />
            </div>

            <div className='module'>
              <div className='subtitle'>Formación Complementaria<FontAwesomeIcon icon="plus" /></div>  
              <SecondaryStudies />
            </div> 

          </div>
          <div id="secondBody">
            <div className='module'>
              <div className="subtitle"> Habilidades </div>
              <Abilities />
            </div>

            <div className="module">
              <div className="subtitle"> Idiomas </div>
              <Language />
            </div>

            <div className="module">
              <div className="subtitle"> Certificados </div>
              <Certificates />
            </div>

            <div className="module">
              <div className="subtitle"> Otros Intereses </div>
              <OtherInterests />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
