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
  const [ident,setId] = useState("");
  const [password, setPass] = useState("");

  return (
    <>      
     <Login setID={setId} setPASS={setPass}/>
     <br></br>
     <SendMessage id={ident} password={password} />
     <Messages id={ident} password={password} />

    </>
  );
}

export default App;
