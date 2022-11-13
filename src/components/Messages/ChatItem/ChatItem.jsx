import ChatItemCSS from "./ChatItem.module.css";

const ChatItem = (props) => {
    return (<div className={ChatItemCSS.chat_item}>{props.message}</div>)
}

export default ChatItem;