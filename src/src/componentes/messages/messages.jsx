import { useEffect, useRef, useState } from "react";
import { authToken } from "../../general.js"

function Messages({datos}) {
    const url = "https://web-develop-react-express-chat.herokuapp.com/messages/";
    const token = authToken(datos.id, datos.password);
    const [messages, setMessages] = useState("");
    const timer = useRef(0)
    useEffect(
        ()=>{
            if (timer.current !== 0) clearInterval(timer.current)
            timer.current = setInterval(MessagesHandler,1000);
            console.log("hola");   
        },
            [datos]
        
    )

    async function MessagesHandler() {

        const response = await fetch(
            url,
            {
                method: "GET",
                headers: {
                    Authorization: token
                }
            }
        );
        setMessages(await response.text());
        return messages;

    }
    return (
        <>
           <h2>Mensajes: </h2>
           <p>{messages}</p>
        </>


    );

}
export default Messages;