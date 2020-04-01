import React from 'react';

function Header(props) {
console.log(props);
    return(
    <h2 id="encabezado" className="encabezado">{props.title}</h2>
    )
}

export default Header;