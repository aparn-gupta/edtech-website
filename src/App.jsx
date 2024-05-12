import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Contact from "./contact";
import Home from "./home";
import Faq from "./faq";
import Flashcard from "./flashcard";
import Login from "./login";
import Maths from "./maths";
import Relations from "./relations";
import Createflashcard from "./createflashcard";
import Study from "./study";
import Test from "./test";
import Quiz from "./quiz";
import Game from "./game";
import Others from "./others";
import Midsecandfaq from "./midsecandfaq";

function App() {
  return (
    <BrowserRouter>
      <div className="mx-14">
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flashcard" element={<Flashcard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-flashcard" element={<Createflashcard />} />
          <Route path="/flashcard/maths" element={<Maths />} />
          <Route path="/flashcard/maths/relations" element={<Relations />} />
          <Route path="/flashcard/maths/relations/study" element={<Study />} />
          <Route path="/flashcard/maths/relations/quiz" element={<Quiz />} />
          <Route path="/flashcard/maths/relations/test" element={<Test />} />
          <Route path="/flashcard/maths/relations/game" element={<Game />} />
          <Route
            path="/flashcard/maths/relations/others"
            element={<Others />}
          />
        </Routes>

        <Midsecandfaq />
      </div>
    </BrowserRouter>
  );
}

export default App;
