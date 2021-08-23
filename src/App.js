import { useRef, useEffect } from "react";
import { Sampler } from "tone";
import './App.css';

import DrumPads from "./components/Pads/DrumPads";
import C2 from "./resources/808 kit/808-kick.mp3"
import D2 from "./resources/808 kit/808-snare.mp3"
import E2 from "./resources/808 kit/808-ohat.mp3"
import F2 from "./resources/808 kit/808-chat.mp3"
import G2 from "./resources/808 kit/808-cymbal.mp3"
import A3 from "./resources/808 kit/808-shaker.mp3"
import B3 from "./resources/808 kit/808-triangle.mp3"
import C3 from "./resources/808 kit/808-clap.mp3"

function App() {
  // Sampler 
  let sampler = useRef(null);
  useEffect(() => {
    sampler.current = new Sampler(
        { C2, D2, E2, F2, G2, A3, B3, C3 }
    ).toDestination()
  }, [])

  //Keys for Key Triggers    
  const handleKeyKick = e => e.key === "q" ? sampler.current.triggerAttack("C2") : null;
  const handleKeySnare = e => e.key === "w" ? sampler.current.triggerAttack("D2") : null;
  const handleKeyOHit = e => e.key === "e" ? sampler.current.triggerAttack("E2") : null;
  const handleKeyCHit = e => e.key === "r" ? sampler.current.triggerAttack("F2") : null;
  const handleKeyCymbal = e => e.key === "a" ? sampler.current.triggerAttack("G2") : null;
  const handleKeyShaker = e => e.key === "s" ? sampler.current.triggerAttack("A3") : null;
  const handleKeyTriangle = e => e.key === "d" ? sampler.current.triggerAttack("B3") : null;
  const handleKeyClap = e => e.key === "f" ? sampler.current.triggerAttack("C3") : null;
  
  // Key Triggers
  useEffect(() => {
    document.addEventListener('keydown', handleKeyKick);
    return () => document.removeEventListener('keydown', handleKeyKick)
  }, [])
  useEffect(() => {
    document.addEventListener('keydown', handleKeySnare);
    return () => document.removeEventListener('keydown', handleKeySnare)
  }, [])
  useEffect(() => {
    document.addEventListener('keydown', handleKeyOHit);
    return () => document.removeEventListener('keydown', handleKeyOHit)
  }, [])
  useEffect(() => {
    document.addEventListener('keydown', handleKeyCHit);
    return () => document.removeEventListener('keydown', handleKeyCHit)
  }, [])
  useEffect(() => {
    document.addEventListener('keydown', handleKeyCymbal);
    return () => document.removeEventListener('keydown', handleKeyCymbal)
  }, [])
  useEffect(() => {
    document.addEventListener('keydown', handleKeyShaker);
    return () => document.removeEventListener('keydown', handleKeyShaker)
  }, [])
  useEffect(() => {
    document.addEventListener('keydown', handleKeyTriangle);
    return () => document.removeEventListener('keydown', handleKeyTriangle)
  }, [])
  useEffect(() => {
    document.addEventListener('keydown', handleKeyClap);
    return () => document.removeEventListener('keydown', handleKeyClap)
  }, [])
  
  // Mousedown Triggers
  const handleKickTrigger = () => sampler.current.triggerAttack("C2")
  const handleSnareTrigger = () => sampler.current.triggerAttack("D2")
  const handleOHatTrigger = () => sampler.current.triggerAttack("E2")
  const handleCHatTrigger = () => sampler.current.triggerAttack("F2")
  const handleCymbalTrigger = () => sampler.current.triggerAttack("G2")
  const handleShakerTrigger = () => sampler.current.triggerAttack("A3")
  const handleTriangleTrigger = () => sampler.current.triggerAttack("B3")
  const handleClapTrigger = () => sampler.current.triggerAttack("C3")

  return (
    <main className="tone-drums">
      <h1 className="tone-drum-title">Finger Drums</h1>
      <DrumPads 
        handleKickTrigger={handleKickTrigger}
        handleSnareTrigger={handleSnareTrigger}
        handleOHatTrigger={handleOHatTrigger}
        handleCHatTrigger={handleCHatTrigger}
        handleCymbalTrigger={handleCymbalTrigger}
        handleShakerTrigger={handleShakerTrigger}
        handleTriangleTrigger={handleTriangleTrigger}
        handleClapTrigger={handleClapTrigger}
      />
    </main>
  );
}

export default App;
