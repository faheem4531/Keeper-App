import React from "react";

const Note = (prop) => {
    return (
        <div className="note">
            <h1>{prop.heading}</h1>
            <p>{prop.detail}</p>
        </div>
    )
}

export default Note;