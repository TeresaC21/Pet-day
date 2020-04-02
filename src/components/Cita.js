import React from 'react';
import PropTypes from 'prop-types';

const Cita = (props) => ( //en props cita, eliminarCita
     <div className="cita">
         <p>Mascota:<span>{props.cita.mascota}</span></p>
         <p>Dueño:<span>{props.cita.propietario}</span></p>
         <p>Fecha:<span>{props.cita.fecha}</span></p>
         <p>Hora:<span>{props.cita.hora}</span></p>
         <p>Síntomas:<span>{props.cita.sintomas}</span></p>

         <button
            className="button eliminar u-full-width"
             onClick={ ()=> props.eliminarCita(props.cita.id)}
         >Eliminar</button>
     </div> 
     );

     Cita.propTypes = {
        cita: PropTypes.object.isRequired,
        eliminarCita: PropTypes.func.isRequired
    }
 
export default Cita;