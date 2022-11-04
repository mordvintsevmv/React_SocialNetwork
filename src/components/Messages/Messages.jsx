import MessagesCSS from './Messages.module.css';
import DialogueItem from "./DialogueItem/DialogueItem";
import ChatItem from "./ChatItem/ChatItem";

const Messages = (props) => {

    let dialoguesData = [
        {id:"1", name:"Maksim"},
        {id:"2", name:"Andrey"},
        {id:"3", name:"Masha"},
        {id:"4", name:"Igor"},
        {id:"5", name:"Anton"},
        {id:"6", name:"Nick"}
    ]

    let dialoguesElements = dialoguesData.map((el) => <DialogueItem id={el.id} name={el.name} />)



    let messageData = [
        {id:"1", message:"Hi!"},
        {id:"2", message:"Good News!"},
        {id:"3", message:"GoodBye!"},
    ]

    let messageElements = messageData.map((el) => <ChatItem message={el.message} />)


    return (
        <div className={MessagesCSS.message_wrapper}>

            <div className={MessagesCSS.dialogues}>
                {dialoguesElements}
            </div>

            <div className={MessagesCSS.chat}>
                {messageElements}
            </div>

        </div>
    )
}

export default Messages;