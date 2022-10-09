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

  function deleteNote(id) {
    setNotes(preValue => {
      return preValue.filter((noteItem, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div>
      <Header />
      <InputArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      }
      )}
      <Footer />
    </div>
  );
}

export default App;
