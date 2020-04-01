import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  // Arreglo de citas
const [citas, setSaveCitas] = useState([]);

// Funcion tome citas actuales y agregue nueva cita
const crearCita = cita => {
  setSaveCitas([ ...citas, cita ])
}

  // Date actually Footer
  const date = new Date().getFullYear();

  return (
    <Fragment>
      <Header 
        title="PET DAY"
      />

      <h2>Administrador de Pacientes</h2>
      
      <div className="container">
        <div className="row">
          <div className="one-half column">
              <Formulario 
              crearCita={crearCita}
              />
          </div>
          <div className="one-half column">
              <h2>Administrar citas</h2>
              {citas.map(cita => (
                <Cita
                  key={cita.id} 
                  cita={cita}
                />
              ))}
              
          </div>
        </div>
      </div>

      <Footer 
      date={date}
      />
    </Fragment>
  );
}

export default App;
