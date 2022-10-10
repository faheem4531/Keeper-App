import React, { useState } from "react";

import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function InputArea(props) {
  const [isExpanded, setExpended] = useState(false)

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

  function handleExpanding() {
    setExpended(true);
  }

  return (

    <form className="create-note">
      {isExpanded ?
        <input
          name="title"
          value={note.title}
          onChange={handleChange}
          placeholder="Title"
        /> : null}
      <textarea
        name="content"
        value={note.content}
        onClick={handleExpanding}
        onChange={handleChange}
        placeholder="Take a note..."
        rows={isExpanded ? "3" : "1"}
      />
      <Zoom in={isExpanded}>
        <Fab
          onClick={onClick}><AddIcon />
        </Fab>
      </Zoom>
    </form>

  );
}

export default InputArea;