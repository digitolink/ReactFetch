import logo from './logo.svg';
import './App.css';
import Login from './componentes/login/login';
import Messages from './componentes/messages/messages';
import SendMessage from './componentes/sendmessage/sendmessage';
import { useState } from 'react';

/*
      <Login />
      <SendMessage id="1649067171162" password="ms4" />
      <Messages id="1649067171162" password="ms4" />
*/

function App() {
  return (
    <>
      <Messages id="1649067171162" password="ms4" />

    </>
  );
}

export default App;