import React, { useEffect, useState, useCallback } from "react";
import * as Tone from 'tone';
import RhodesC from './audio/rhodes.wav';
import RhodesE from './audio/rhodes-e.wav';
import RhodesG from './audio/rhodes-g.wav';

const App = () => {

  const [audioInstances, setAudioInstances] = useState([]);


  const handleKeyDown = useCallback((e) => {

    const newAudioC = new Audio(RhodesC);
    const newAudioE = new Audio(RhodesE);
    const newAudioG = new Audio(RhodesG);


    // {TODO} Set up loop for lowering volume while stacking multiple audio files 


    newAudioC.volume = 0.5;
    newAudioE.volume = 0.5;
    newAudioG.volume = 0.5;


    let key = e.key;
    if (key === '1') {


      newAudioC.play();
      newAudioE.play();
      newAudioG.play();
    };


    // {TODO} figure out how to only have one audio instance playing at a time


    setAudioInstances([newAudioC, newAudioE, newAudioG]);
  }, []);



  const handleKeyUp = useCallback(() => {
    audioInstances.forEach((audio) => {
      let volume = 0.5;
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
      setTimeout(() => clearInterval(fadeVolume), 5000); // Adjust the time accordingly
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


    // const runit = (e) => {
    //     // const synth = new Tone.PolySynth().toDestination();
    //     // const now = Tone.now()
    //     // synth.triggerAttack("C4", now)
    //     // synth.triggerAttack("A5", now)
    //     // synth.triggerRelease(["C4", "A5"], now + 0.5)

    //     // const synth = new Tone.PolySynth().toDestination();
    //     // const poly = new Tone.PolySynth(Tone.AMSynth).toDestination();
    //     // // can pass in an array of durations as well
    //     // poly.triggerAttackRelease(["Eb3", "G4", "Bb4", "D5"], [1,2,3,4]);


    //     // setInterval(() => {
    //     // let key = e.key
    //     // if (key === '1') {
    //     //     const sampler = new Tone.Sampler({
    //     //         urls: {
    //     //             A1: "A1.mp3",
    //     //             A2: "A2.mp3",
    //     //         },
    //     //         baseUrl: "https://tonejs.github.io/audio/casio/",
    //     //         onload: () => {
    //     //             sampler.triggerAttackRelease(["C1", "E1", "G1", "B1", "E2"], 5);
    //     //         }
    //     //     }).toDestination();
    //     //     sampler.volume.value = -12
    //     // }
    //     // }, 1000)


    // }