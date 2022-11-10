import React from "react";
import { useState } from "react";

const Update = (props) => {
    const [title, setTitle] = useState(props.title); //props.title은 변경불가 -> state로!
    const [body, setBody] = useState(props.body);
    return <article>
        <h2>Update</h2>
        <form onSubmit={event => {
            event.preventDefault();
            const title = event.target.title.value;
            const body = event.target.body.value;
            props.onUpdate(title, body);
        }}>
            <p><input type="text" name="title" placeholder="title" value={title} onChange={event => {
                setTitle(event.target.value);
            }} /></p>
            <p><textarea name="body" placeholder="body" value={body} onChange={event => {
                setBody(event.target.value);
            }}></textarea></p>
            <p><input type="submit" value="Update" /></p>
        </form>
    </article>
}

export default Update;