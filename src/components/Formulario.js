import React, { Fragment, useState } from 'react';
//import uuid from 'uuid/v4';
import PropTypes from 'prop-types';
const { v4: uuidv4 } = require('uuid');

const Formulario = (props) => { // crearCitas

    // Crear State de citas
    const [cita, setCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });
    const [error, setError] = useState(false)

    // Función que se actualiza cuando el usuario escribe en un input
    const actualizarState = e => {
        setCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    // Extraer valores
    const { mascota, propietario, fecha, hora, sintomas } = cita

    // Cuando el usuario haga click en cita
    const submitCita = e => {
       e.preventDefault();
       
       // Validar
       if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || 
       hora.trim() === '' || sintomas.trim() === '') {  
           setError(true);
           return;
       }

       // Eliminar mensaje previo de error
       setError(false);

       // Asignar ID
       cita.id = uuidv4();
       
       // Crear cita
       props.crearCita(cita);

       // Reiniciar form
       setCita({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
       })
    }

    return ( 
    <Fragment>
        <h2>Crear Cita</h2>

        {error ? <p className="alerta-error">Todos los campos son obligatorios</p>
        : null}

        <form
        onSubmit={submitCita}
        >
            <label>Nombre Mascota</label>
            <input
                type="text"
                name="mascota"
                className="u-full-width"
                placeholder="Nombre Mascota"
                onChange={actualizarState}
                value={mascota}
            />

            <label>Nombre Dueño</label>
            <input
                type="text"
                name="propietario"
                className="u-full-width"
                placeholder="Nombre Dueño de la mascota"
                onChange={actualizarState}
                value={propietario}
            />
            
            <label>Fecha de alta</label>
            <input
                type="date"
                name="fecha"
                className="u-full-width"
                onChange={actualizarState}
                value={fecha}
            />
            
            <label>Hora</label>
            <input
                type="time"
                name="hora"
                className="u-full-width"
                onChange={actualizarState}
                value={hora}
            />

            <label>Síntomas</label>
            <textarea
            className="u-full-width"
            name="sintomas"
            onChange={actualizarState}
            value={sintomas}
            ></textarea>
            
            <button
            type="submit"
            className="u-full-width button-primary"
            >Agregar cita</button>
        </form>

    </Fragment>
    
     );
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}
 
export default Formulario;