import { useState } from "react";
import { authToken } from "../../general.js"

function Messages({id,password}) {
    const url = "https://web-develop-react-express-chat.herokuapp.com/messages/";
    const token = authToken(id, password);
    const [messages, setMessages] = useState("");

    async function MessagesHandler() {

        const response = await fetch(
            url,
            {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    Authorization: token
                }
            }
        );
        setInterval(setMessages(response.json()),1000);
        return response.json();

    }
    return (
        <>
           <p onChange={MessagesHandler}>
           </p>
        </>


    );

}
export default Messages;