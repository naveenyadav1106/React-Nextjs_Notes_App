"use client"
import React from 'react'

const Notes = (props) => {
    // console.log(props)

    function handleDelete() {
        props.handleDelete(props.id)
    }

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Notes