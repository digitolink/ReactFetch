import logo from './logo.svg';
import './App.css';
import Login from './componentes/login/login';
import Messages from './componentes/messages/messages';
import SendMessage from './componentes/sendmessage/sendmessage';
import { useState } from 'react';
/*
  <SendMessage id="1649141341919" password="ms4" />
  <Messages id="1649141341919" password="ms4" />
*/
function App() {
  const [datosPadre,setDatosPadre] = useState({
    id: 0,
    password: ""
});

  return (
    <>   
     <h1>Componente principal:</h1>   
     <Login parentSetter={setDatosPadre}/>
     <br></br>
     <SendMessage datos={datosPadre} />
     <Messages datos={datosPadre}/>

    </>
  );
}

export default App;
