import * as Tone from "tone";
import "../src/App.css";
import { useEffect, useState } from "react";
import CicleOfFifths from "./images/circof5ths.webp";

function App() {
    const [noteValue, setNoteValue] = useState("");
    const [chordValue, setChordValue] = useState("");
    const [whichChord, setWhichChord] = useState("")
    const [chordNotes, setChordNotes] = useState("")

    const updateNoteValue = (e) => {
        let element = e.target.innerText;
        setNoteValue(element);
    };
    const updateChordValue = (e) => {
        let element = e.target.innerText;
        setChordValue(element);
    };

    // handle Chord play with keypress
    const playChord = (e) => {
        const synth = new Tone.PolySynth(Tone.Synth).toDestination();
        const now = Tone.now();

        // handle chord 1 both
        if (noteValue === "C" && e.key === "1") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["C4", "D#4", "G4"], "4n");
                setWhichChord("C minor triad");
                setChordNotes("C - D#/E♭ - G");
            } else if (chordValue === "Major") {
                synth.triggerAttackRelease(["C4", "E4", "G4"], "4n");
                setWhichChord("C Major triad");
                setChordNotes("C - E - G");
            }
        }

        // handle C chord 2
        if (noteValue === "C" && e.key === "2") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["D4", "F4", "G#4"], "4n");
                setWhichChord("D diminished triad");
                setChordNotes("D - F - G#/A♭");
            } else if (chordValue === "Major") {
                synth.triggerAttackRelease(["D4", "F4", "A4"], "4n");
                setWhichChord("D Major triad");
                setChordNotes("D - F - A");
            }
        }

        // handle C chord 3
        if (noteValue === "C" && e.key === "3") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["D#4", "G4", "A#4"], "4n");
                setWhichChord("D#/E♭ Major triad");
                setChordNotes("D#/E♭ - G - A#/B♭");
            } else if (chordValue === "Major") {
                synth.triggerAttackRelease(["E4", "G4", "B4"], "4n");
                setWhichChord("E minor triad");
                setChordNotes("E - G - B");
            }
        }

        // handle C chord 4
        if (noteValue === "C" && e.key === "4") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["F4", "G#4", "C5"], "4n");
                setWhichChord("F minor triad");
                setChordNotes("F - G#/A♭ - C");
            } else if (chordValue === "Major") {
                synth.triggerAttackRelease(["F4", "A4", "C5"], "4n");
                setWhichChord("F Major triad");
                setChordNotes("F - A - C");
            }
        }

        // handle C chord 5
        if (noteValue === "C" && e.key === "5") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["G4", "A#4", "D5"], "4n");
                setWhichChord("G minor triad");
                setChordNotes("G - A#/B♭ - D");
            } else if (chordValue === "Major") {
                synth.triggerAttackRelease(["G4", "B4", "D5"], "4n");
                setWhichChord("G Major triad");
                setChordNotes("G - B - D");
            }
        }

        // handle C chord 6
        if (noteValue === "C" && e.key === "6") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["G#4", "C5", "D#5"], "4n");
                setWhichChord("G#/A♭ Major triad");
                setChordNotes("A♭ - C - D#/E♭");
            } else if (chordValue === "Major") {
                synth.triggerAttackRelease(["A4", "C5", "E5"], "4n");
                setWhichChord("A Major triad");
                setChordNotes("A - C - E");
            }
        }

        // handle C chord 7
        if (noteValue === "C" && e.key === "7") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["A#4", "D5", "F5"], "4n");
                setWhichChord("A#/B♭ Major triad");
                setChordNotes("A#/B♭ - D - F");
            } else if (chordValue === "Major") {
                synth.triggerAttackRelease(["B4", "D5", "F5"], "4n");
                setWhichChord("B Diminished triad");
                setChordNotes("B - D - F");
            }
        }
    };


    // more dynamic way of doing it gotta figure out how to attach the chords
    // const playChord = (e) => {
    //     const chordNumber = parseInt(e.key);
    //     if (noteValue === 'C' && chordNumber >= 1 && chordNumber <= 7) {
    //         const chordType = chordValue === "minor" ? 'minor' : 'major';
    //         console.log(`playing ${chordType} chord ${chordNumber}`);
    //     }
    // };

    useEffect(() => {
        console.log(noteValue);
    }, [noteValue]);

    useEffect(() => {
        document.addEventListener("keydown", playChord);

        return () => {
            document.removeEventListener("keydown", playChord);
        };
    }, [playChord]); // Update the event listener when playChord changes

    return (
        <div>
            <h1 className="title">Theory Thing</h1>

            <div className="keys" onKeyDown={playChord}>
                <h2 onClick={updateNoteValue}>C</h2>
                <h2 onClick={updateNoteValue}>C#/Db</h2>
                <h2 onClick={updateNoteValue}>D</h2>
                <h2 onClick={updateNoteValue}>D#/Eb</h2>
                <h2 onClick={updateNoteValue}>E</h2>
                <h2 onClick={updateNoteValue}>F</h2>
                <h2 onClick={updateNoteValue}>F#/Gb</h2>
                <h2 onClick={updateNoteValue}>G</h2>
                <h2 onClick={updateNoteValue}>G#/Ab</h2>
                <h2 onClick={updateNoteValue}>A</h2>
                <h2 onClick={updateNoteValue}>A#/Bb</h2>
                <h2 onClick={updateNoteValue}>B</h2>
            </div>

            <div className="minormajor">
                <h3 className="scaleChoice" onClick={updateChordValue}>
                    Major
                </h3>
                <h3 className="scaleChoice" onClick={updateChordValue}>
                    minor
                </h3>
            </div>

            <h1 className="scaleInfo">
                Scale:&nbsp;<span className="noteValue">{noteValue}</span>&nbsp;
                <span className="chordValue">{chordValue}</span>
            </h1>


            <h1 className="scaleInfo">{whichChord}</h1>
            <h1 className="scaleInfo">{chordNotes}</h1>

            <div className="circleParent">
                <img
                    className="circleimg"
                    src={CicleOfFifths}
                    alt="circle of fiths wheel"
                />
            </div>
        </div>
    );
}

export default App;
