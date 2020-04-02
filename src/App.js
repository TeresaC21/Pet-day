import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {
// Let citas en local storage
 let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales) {
    citasIniciales = [];
  } 

  // Arreglo de citas
const [citas, setSaveCitas] = useState(citasIniciales);

// UseEffect para realizr ciertas operaciones cuando el state cambia
 useEffect( () => {
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));

  if (citasIniciales) {
    localStorage.setItem('citas', JSON.stringify(citas))
  } else{
    localStorage.setItem('citas', JSON.stringify([]))
  }
}, [citas]) 

// Funcion tome citas actuales y agregue nueva cita
const crearCita = cita => {
  setSaveCitas([ ...citas, cita ])
}

// Eliminar cita
const eliminarCita = id => {
  const nuevasCitas = citas.filter(cita => cita.id !== id)
  setSaveCitas(nuevasCitas);
}

// Mensaje condicional hay o no citas
const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas';

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
            <h2>{titulo}</h2>
              {citas.map(cita => (
                <Cita
                  key={cita.id}
                  cita={cita}
                  eliminarCita={eliminarCita}
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
