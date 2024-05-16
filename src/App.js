import "./App.css";
import React from "react";
import Icons from "./components/icons/Icons.jsx";
import InfoFooter from "./components/infoFooter/InfoFooter.jsx";
import Modal from "./components/modal/modal.jsx"

function App() {
  return (
    <div className="app">
      <h3>Welcome to my Portfolio</h3>
      <Icons/>
      <Modal/>
      <InfoFooter/>
    </div>
  );
}

export default App;
