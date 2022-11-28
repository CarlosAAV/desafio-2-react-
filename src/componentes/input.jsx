import React from 'react';


function Input({nombre, setNombre, password, setPassword}) {
    return (
        <div>
            <h1>Formulario</h1>

            <form className='input'>

                <input

                    type="text"
                    placeholder='Ingresa tu nombre'
                    name='nombre'
                    id='nombre'
                    onChange={(e)=> setNombre(e.target.value)}
                    value={nombre}

                />

                <input

                    type="password"
                    placeholder='Ingresa tu clave '
                    name='password'
                    id='password'
                    onChange={(e)=> setPassword(e.target.value)}
                    value={password}

                />

            </form>
        </div>
    );
}

export default Input;