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
import Midsection from "./midsection";
import Createflashcard from "./createflashcard";

import Faqsection from "./faqsection";
import faqData from "./faqdata";
import Study from "./study";




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
          <Route path="/flashcard/maths/relations/study" element={<Relations />} />
        </Routes>

        <div className="mx-14">   
        <Midsection />          
          {faqData.map((item) => (
            <Faqsection key={item.id} Q={item.Q} A={item.A} />
          ))}


         
        

          





        </div>


   


       

       
      </div>
    </BrowserRouter>
  );
}

export default App;
