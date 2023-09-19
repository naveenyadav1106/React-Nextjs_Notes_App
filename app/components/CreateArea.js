"use client"
import React, { useState } from 'react'

const CreateArea = (props) => {
    // console.log(props)

    const [note, setnote] = useState({
        title: "",
        content: ""
    })

    function handleinput(event) {
        const { name, value } = event.target;
        setnote(prenotes => {
            return {
                ...prenotes,
                [name]: value
            };
        });
    }

    function handlesubmit(event) {
        props.addnote(note)
        setnote({
            title: "",
            content: ""
        })
        event.preventDefault();
    }


    return (
        <form>
            <input name='title' value={note.title} onChange={handleinput} placeholder='enter your content title' />
            <textarea name="content" rows="10" value={note.content} onChange={handleinput} placeholder='enter your content'></textarea>
            <button onClick={handlesubmit}>Add</button>
        </form>
    )
}

export default CreateArea