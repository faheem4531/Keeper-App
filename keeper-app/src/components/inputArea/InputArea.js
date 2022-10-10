import React, { useState } from "react";

function InputArea(props) {

  const [note, setNote] = useState({
    title: "",
    content: ""
  })

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(preValue => {
      return {
        ...preValue,
        [name]: value
      };
    });
  }

  function onClick(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    })
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          value={note.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <textarea
          name="content"
          value={note.content}
          onChange={handleChange}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={onClick}>Add</button>
      </form>
    </div>
  );
}

export default InputArea;