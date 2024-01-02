import React, { useEffect, useState, useCallback } from "react";
import RhodesC from './audio/rhodes.wav';
import RhodesE from './audio/rhodes-e.wav';
import RhodesG from './audio/rhodes-g.wav';

const App = () => {
  const [audioInstances, setAudioInstances] = useState([]);

  const handleKeyDown = useCallback((e) => {
    const newAudioC = new Audio(RhodesC);
    const newAudioE = new Audio(RhodesE);
    const newAudioG = new Audio(RhodesG);

    // Set lower initial volume
    newAudioC.volume = 0.5;
    newAudioE.volume = 0.5;
    newAudioG.volume = 0.5;

    let key = e.key;
    if (key === '1') {

      newAudioC.currentTime = 0;  // Reset currentTime to start from the beginning
      newAudioE.currentTime = 0;
      newAudioG.currentTime = 0;

      newAudioC.play();
      newAudioE.play();
      newAudioG.play();
    }

    // figure out how to only have one audio instance playing at a time

    // if (key === '2') {
    //   newAudioC.volume = 0;  // Reset volume to start from the beginning
    //   newAudioE.volume = 0;
    //   newAudioG.volume = 0;

    //   newAudioC.pause();
    //   newAudioE.pause();
    //   newAudioG.pause();
    // }
    setAudioInstances([newAudioC, newAudioE, newAudioG]);
  }, []);

  const handleKeyUp = useCallback(() => {
    audioInstances.forEach((audio) => {
      let volume = 1;
      let volDec = 0.001;
      const fadeVolume = setInterval(() => {
        volume -= 0.001;
        audio.volume = Math.max(0, audio.volume - volDec);
        console.log(volume);
        if (volume <= 0) {
          clearInterval(fadeVolume);
        }
      }, 0.05);

      // Clear the interval if volume reaches 0
      setTimeout(() => clearInterval(fadeVolume), 10000); // Adjust the time accordingly
    });

    setAudioInstances([]);
  }, [audioInstances]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  return (
    <div className="App">
      <h1>Theory Thing</h1>
    </div>
  );
};

export default App;
