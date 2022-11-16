import MessagesCSS from './Messages.module.css';
import DialogueItem from "./DialogueItem/DialogueItem";
import ChatItem from "./ChatItem/ChatItem";
import React from "react";
import {Field, Form, Formik} from "formik";


const Messages = (props) => {

    let dialoguesElements = props.messagePage.dialogueData.map((el) => <DialogueItem key={el.id} id={el.id}
                                                                                     name={el.name}/>)

    let messageElements = props.messagePage.messageData.map((el) => <ChatItem key={el.id} message={el.message}/>)

    return (<div className={MessagesCSS.message_wrapper}>

        <div className={MessagesCSS.dialogues}>
            {dialoguesElements}
        </div>

        <div className={MessagesCSS.chat}>
            {messageElements}

            <div className={MessagesCSS.form_wrapper}>

                <Formik initialValues={{text: ""}} onSubmit={(values,{resetForm}) => {
                    props.addMessage(values);
                    resetForm({})
                }}>

                    <Form>
                        <Field type={'text'} name={'text'} placeholder={"Your message"}></Field>
                        <button type={'submit'}>Send</button>
                    </Form>

                </Formik>

            </div>

        </div>

    </div>)
}

export default Messages;