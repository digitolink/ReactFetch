import { useState } from "react";
import { authToken } from "../../general.js"

function SendMessage({id,password}) {
    const url = "https://web-develop-react-express-chat.herokuapp.com/message/";
    const token = authToken(id, password);
    const mensaje = document.querySelector("#mensaje");
    const [message, setSendMessage] = useState("");

    async function SendMessageHandler() {

        const response = await fetch(
            url,
            {
                method: "POST",
                body: mensaje,
                headers: {
                    Authorization: token
                }
            }
        );
        setSendMessage(response);
    }
    return (
        <>
           <textarea id="mensaje" cols="30" rows="10">
           </textarea>
           <input onClick={SendMessageHandler} type="button" value="Enviar mensaje" />
        </>


    );

}
export default SendMessage;