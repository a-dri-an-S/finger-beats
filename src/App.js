import { useRef, useEffect } from "react";
import { Sampler } from "tone";
import C2 from "./resources/808 kit/808-kick.mp3"
import C3 from "./resources/808 kit/808-snare.mp3"
import './App.css';

function App() {


  let sampler = useRef(null);

  const handleKeyKick = (e) => {
    if (e.key === "q") {
      sampler.current.triggerAttack("C2")
    }
  }

  const handleKeySnare = (e) => {
    if (e.key === "w") {
      sampler.current.triggerAttack("C3")
    }
  }
  
  
  useEffect(() => {

    sampler.current = new Sampler(
      { C2, C3 }
    ).toDestination()

    document.addEventListener('keydown', handleKeyKick);
    document.addEventListener('keydown', handleKeySnare);

  }, [])

  const handleClickKick = () => sampler.current.triggerAttack("C2")
  const handleSnare = () => sampler.current.triggerAttack("C3")

  return (
    <div className="App">
      <h1>Finger Beats</h1>
      <button onMouseDown={handleClickKick}>Kick</button>
      <button onMouseDown={handleSnare}>Snare</button>
    </div>
  );
}

export default App;
