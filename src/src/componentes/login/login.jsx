import { authToken } from "../../general.js"
import { useState } from "react";

function Login({setID, setPASS}) {
    const url = "https://web-develop-react-express-chat.herokuapp.com/login/";
    const [login, setLogin] = useState("");
    const [usertext, setUserText] = useState("");
    const [passwordtext, setPasswordText] = useState("");



    async function LoginHandler(event) {
        const data = {
            userName: usertext,
            password: passwordtext
        }
        const dataJSON = JSON.stringify(data);
        const response = await fetch(
            url,
            {
                method:"POST",
                body:dataJSON,
                headers: {
                 'Content-Type': 'application/json;charset=utf-8'
                },
            }
            
            );
        const identificador=await response.json();
        setLogin(identificador);
        setID(identificador);
        setPASS(passwordtext);
        console.log(login);

    }

    function UserTextHandler(event){
        setUserText(event.target.value);
    }

    function PasswordTextHandler(event){
        setPasswordText(event.target.value);
    }
    return (
        <>
            <label htmlFor="user">Usuario a crear: </label>
            <input type="text" name="user"
                   placeholder="indica nombre de usuario"
                   onChange={UserTextHandler} value = {usertext} />
            <label htmlFor="pass">Password: </label>
            <input type="password" name="pass" id="password" 
                   placeholder="indica password"
                   onChange={PasswordTextHandler} value = {passwordtext} />
            <input type="button" value="Enviar" onClick={LoginHandler} />

        </>


    );

}
export default Login;