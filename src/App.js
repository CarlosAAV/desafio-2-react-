
import { useState } from 'react'
import Input from './componentes/input';
import Boton from './componentes/boton';

function App() {

  let [nombre, setNombre] = useState();
  let [password, setPassword] = useState();

  return (


    <div className="App">


      <div className='card'>

        <Input

          nombre={nombre}
          setNombre={setNombre}
          password={password}
          setPassword={setPassword}

        />

      {(password === '252525') ? <Boton /> : null}

      </div>


    </div>

  );
}

export default App;
