import { useState, useRef, useEffect } from "react";
import { Sampler } from "tone";
import C2 from "./resources/808 kit/808-kick.mp3"
import C3 from "./resources/808 kit/808-snare.mp3"
import './App.css';

function App() {


  let sampler = useRef(null);

  useEffect(() => {
    sampler.current = new Sampler(
      { C2, C3 }
    ).toDestination()
  }, [])

  const handleKick = () => sampler.current.triggerAttack("C2")
  const handleSnare = () => sampler.current.triggerAttack("C3")

  return (
    <div className="App">
      <h1>Finger Beats</h1>
      <button onMouseDown={handleKick}>Kick</button>
      <button onMouseDown={handleSnare}>Snare</button>
    </div>
  );
}

export default App;
