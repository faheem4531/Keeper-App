import React from "react";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Note from "./components/note/Note";
import Detail from "./components/note/Details";

const App = () => {
  return (
    <div>
      <Header />

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
