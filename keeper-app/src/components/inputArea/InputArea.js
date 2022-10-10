import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

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

    <form className="create-note">
      {/* {isExpanded && ( */}
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
        rows="5"
      />
      <Zoom in={true}>
        <Fab
          onClick={onClick}><AddIcon />
        </Fab>
      </Zoom>
    </form>

  );
}

export default InputArea;