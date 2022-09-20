import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map((d) => <DialogItem name={d.name} id={d.id}/>
    );

    let messagesElements = props.messageData.map((m) => <Message message={m.message} id={m.id}/>
    );

    let newPostElement = React.createRef();        // Creating empty reference that takes different objects

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div><br/>
            <div>
                <button onClick={addPost}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;