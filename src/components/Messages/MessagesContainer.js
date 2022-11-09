import React from "react";
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/MessagePageReducer";
import Messages from "./Messages";
import {StoreContext} from "../../storeContext";

const MessagesContainer = () => {

    return (
        <StoreContext.Consumer>{
            (store) => {

                let messageChange = (text) => {
                    store.dispatch(onMessageChangeActionCreator(text));
                }

                let addMessage = () => {
                    store.dispatch(addMessageActionCreator())
                }

                return (
                    <Messages
                        messageChange={messageChange}
                        addMessage={addMessage}
                        dialogueData={store.getState().messagePage.dialogueData}
                        currentMessage={store.getState().messagePage.currentMessage}
                        messageData={store.getState().messagePage.messageData}/>
                );
            }
        }

        </StoreContext.Consumer>
    )
}

export default MessagesContainer;