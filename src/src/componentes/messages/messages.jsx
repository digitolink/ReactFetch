import { useEffect, useState } from "react";
import { authToken } from "../../general.js"

function Messages({id,password}) {
    const url = "https://web-develop-react-express-chat.herokuapp.com/messages/";
    const token = authToken(id, password);
    const [messages, setMessages] = useState("");
    useEffect(
        ()=>{
            setInterval(MessagesHandler,1000);
            console.log("hola")
            
        },
            []
        
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