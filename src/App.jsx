import React from "react";
import Header from "./Header";
import SearchForm from "./SearchForm";
import VideoBlocks from "./VideoBlocks";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <VideoBlocks />
        <SearchForm />
      </div>
    </div>
  );
}

export default App;
