import React, { useState } from "react";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Note from "./components/note/Note";
import InputArea from "./components/inputArea/InputArea";

const App = () => {

  const [notes, setNotes] = useState([])

  function addNote(newNotes) {
    setNotes(
      preValue => {
        return [...preValue, newNotes];
      })
  }

  return (
    <div>
      <Header />
      <InputArea onAdd={addNote} />
      {notes.map(noteItem => {
        return <Note
          title={noteItem.title}
          content={noteItem.content}
        />
      }
      )}
      <Footer />
    </div>
  );
}

export default App;
