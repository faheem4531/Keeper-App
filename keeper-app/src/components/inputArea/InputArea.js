import React, { useState } from "react";

function InputArea() {

  const [note, setNote] = useState({
    title: "",
    text: ""
  })

  return (
    <div>
      <form>
        <input
          name="title"
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          value={note.text}
          placeholder="Take a note..."
          rows="3"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default InputArea;