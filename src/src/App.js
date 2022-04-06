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
  const [loggedIn, SetLoggedIn] = useState(true);

  function loginHandler(){
    SetLoggedIn(!loggedIn);

  }

  return (
    <>   
     <h1>Componente principal:</h1>   
     {loggedIn && <Login parentSetter={setDatosPadre}/>}
     <br></br>
     {!loggedIn && <SendMessage datos={datosPadre}/>}
     {!loggedIn && <Messages datos={datosPadre}/>}
     <button onClick={loginHandler}>Login</button>

    </>
  );
}

export default App;
