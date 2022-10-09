import React, { useState } from "react";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Note from "./components/note/Note";
import Detail from "./components/note/Details";
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
      {Detail.map(obj =>
        <Note
          key={obj.key}
          heading={obj.title}
          detail={obj.content}
        />
      )
      }
      <Footer />
    </div>
  );
}

export default App;
