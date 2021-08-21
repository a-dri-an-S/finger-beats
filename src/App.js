import { useState, useRef, useEffect } from "react";
import { Sampler } from "tone";
import C2 from "./resources/808 kit/808-kick.wav"
import C3 from "./resources/808 kit/808-snare.wav"
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
      <button onClick={handleKick}>Kick</button>
      <button onClick={handleSnare}>Snare</button>
    </div>
  );
}

export default App;
