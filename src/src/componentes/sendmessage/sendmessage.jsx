import { useState } from "react";
import { authToken } from "../../general.js"

function SendMessage({datos}) {
    const url = "https://web-develop-react-express-chat.herokuapp.com/message/";
    const token = authToken(datos.id, datos.password);
    
    const [message, setSendMessage] = useState("");
    const [savedmessage, setSavedMessage] = useState("");

    const data={"content":savedmessage};

    function SaveHandler(event){
        setSavedMessage(event.target.value);
    }

    async function SendMessageHandler() {

        const response = await fetch(
            url,
            {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    Authorization: token
                }
            }
        );
        setSendMessage(response);
        console.log(message);
    }
    

    return (
        <>
           <h1>Enviar mensaje: </h1>
           <textarea onChange= {SaveHandler} id="mensaje" cols="30" rows="10">
           </textarea>
           <input onClick={SendMessageHandler} type="button" value="Enviar mensaje" />
        </>


    );

}
export default SendMessage;