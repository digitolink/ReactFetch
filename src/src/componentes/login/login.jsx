import { authToken } from "../../general.js"
import { useEffect, useState } from "react";

function Login({parentSetter}) {
    const url = "https://web-develop-react-express-chat.herokuapp.com/login/";
    const [login, setLogin] = useState(0);
    const [usertext, setUserText] = useState("");
    const [passwordtext, setPasswordText] = useState("");

    async function LoginHandler() {
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
        console.log(login);

    }

    useEffect(
        ()=>{
            parentSetter({
                id: login,
                password: passwordtext
            })
        },
        [login,passwordtext]
    )

    function UserTextHandler(event){
        setUserText(event.target.value);
    }

    function PasswordTextHandler(event){
        setPasswordText(event.target.value);
    }
    return (
        <>
            <h1>Login: </h1>
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