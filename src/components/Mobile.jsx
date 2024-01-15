import * as Tone from "tone";
import "../../src/App.css";
import { useEffect, useState } from "react";
import CicleOfFifths from "../images/circof5ths.webp";
import MiniNav from "./MiniNav";

function Mobile() {
    const [noteValue, setNoteValue] = useState("");
    const [chordValue, setChordValue] = useState("");
    const [whichChord, setWhichChord] = useState("");
    const [chordNotes, setChordNotes] = useState("");


    const updateNoteValue = (e) => {
        setNoteValue(e.target.innerText);
    };

    const updateChordValue = (e) => {
        setChordValue(e.target.innerText);
    };

    
    const playChord = (button) => {

        // declare a new variable that holds the synth engine
        const synth = new Tone.PolySynth().toDestination();

        /*--------------------------------------------------------------------*/

        // HANDLE ALL CHORDS IN C

        if (noteValue === "C" && button === "1") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["C3", "D#3", "G3", "A#3"], "4n");
                setWhichChord("C minor 7th");
                setChordNotes("C - D# - G - A#");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["C3", "E3", "G3", "B3"], "4n");
                setWhichChord("C major 7th");
                setChordNotes("C - E - G - B");
            }
        }

        if (noteValue === "C" && button === "2") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["D3", "F3", "G#3", "C4"], "4n");
                setWhichChord("D half-diminished 7th");
                setChordNotes("D - F - G# - C");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["D3", "F3", "A3", "C4"], "4n");
                setWhichChord("D minor 7th");
                setChordNotes("D - F - A - C");
            }
        }

        if (noteValue === "C" && button === "3") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["D#3", "G3", "A#3", "D4"], "4n");
                setWhichChord("D# major 7th");
                setChordNotes("D# - G - A# - D");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["E3", "G3", "B3", "D4"], "4n");
                setWhichChord("E minor 7th");
                setChordNotes("E - G - B - D");
            }
        }

        if (noteValue === "C" && button === "4") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["F3", "G#3", "C4", "D#4"], "4n");
                setWhichChord("F minor 7th");
                setChordNotes("F - G# - C - D#");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["F3", "A3", "C4", "E4"], "4n");
                setWhichChord("F major 7th");
                setChordNotes("F - A - C - E");
            }
        }

        if (noteValue === "C" && button === "5") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["G3", "A#3", "D4", "F4"], "4n");
                setWhichChord("G minor 7th");
                setChordNotes("G - A# - D - F");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["G3", "B3", "D4", "F4"], "4n");
                setWhichChord("G dominant 7th");
                setChordNotes("G - B - D - F");
            }
        }

        if (noteValue === "C" && button === "6") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["G#3", "C4", "D#4", "G4"], "4n");
                setWhichChord("G# major 7th");
                setChordNotes("A♭ - C - D# - G");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["A3", "C4", "E4", "G4"], "4n");
                setWhichChord("A minor 7th");
                setChordNotes("A - C - E - G");
            }
        }

        if (noteValue === "C" && button === "7") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["A#3", "D4", "F4", "G#4"], "4n");
                setWhichChord("A# dominant 7th");
                setChordNotes("A# - D - F - G#");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["B3", "D4", "F4", "A4"], "4n");
                setWhichChord("B half-diminished 7th");
                setChordNotes("B - D - F - A");
            }
        }

        /*--------------------------------------------------------------------*/

        // HANDLE ALL CHORDS IN C#/Db

        // handle C# chord 1 both
        if (noteValue === "C#/Db" && button === "1") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["C#3", "E3", "G#3", "B3"], "4n");
                setWhichChord("C# minor 7th");
                setChordNotes("C# - E - G# - B");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["C#3", "F3", "G#3", "C4"], "4n");
                setWhichChord("C# major 7th");
                setChordNotes("C# - F - G# - C");
            }
        }

        // handle C# chord 2
        if (noteValue === "C#/Db" && button === "2") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["D#3", "F#3", "A3", "C#4"], "4n");
                setWhichChord("D# half-diminished 7th");
                setChordNotes("D# - F# - A - C#");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["D#3", "F#3", "A#3", "C#4"], "4n");
                setWhichChord("D# minor 7th");
                setChordNotes("D# - F# - A# - C#");
            }
        }

        // handle C# chord 3
        if (noteValue === "C#/Db" && button === "3") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["E3", "G#3", "B3", "D#4"], "4n");
                setWhichChord("E major 7th");
                setChordNotes("E - G# - B - D#");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["F3", "G#3", "C4", "D#4"], "4n");
                setWhichChord("E# minor 7th");
                setChordNotes("F - G# - C - D#");
            }
        }

        // handle C# chord 4
        if (noteValue === "C#/Db" && button === "4") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["F#3", "A3", "C#4", "E4"], "4n");
                setWhichChord("F# minor 7th");
                setChordNotes("F# - A - C# - E");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["F#3", "A#3", "C#4", "F4"], "4n");
                setWhichChord("F# major 7th");
                setChordNotes("F# - A# - C# - F");
            }
        }

        // handle C# chord 5
        if (noteValue === "C#/Db" && button === "5") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["G#3", "B3", "D#4", "F#4"], "4n");
                setWhichChord("G# minor 7th");
                setChordNotes("G# - B - D# - F#");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["G#3", "C4", "D#4", "F#4"], "4n");
                setWhichChord("G# dominant 7th");
                setChordNotes("G# - C - D# - F#");
            }
        }

        // handle C# chord 6
        if (noteValue === "C#/Db" && button === "6") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["A3", "C#4", "E4", "G#4"], "4n");
                setWhichChord("A major 7th");
                setChordNotes("A - C# - E - G#");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["A#3", "C#4", "F4", "G#4"], "4n");
                setWhichChord("A# minor 7th");
                setChordNotes("A# - C# - F - G#");
            }
        }

        // handle C# chord 7
        if (noteValue === "C#/Db" && button === "7") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["B4", "D#4", "F#4", "A4"], "4n");
                setWhichChord("B dominant 7th");
                setChordNotes("B - D# - F# - A");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["C4", "D#4", "F#4", "A#4"], "4n");
                setWhichChord("B# half-diminished 7th");
                setChordNotes("C - D# - F# - A#");
            }
        }

        /*--------------------------------------------------------------------*/

        // HANDLE ALL CHORDS IN D

        // handle chord 1 both
        if (noteValue === "D" && button === "1") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["D3", "F3", "A3", "C4"], "4n");
                setWhichChord("D minor 7th");
                setChordNotes("D - F - A - C");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["D3", "F#3", "A3", "C#4"], "4n");
                setWhichChord("D major 7th");
                setChordNotes("D - F# - A# - C#");
            }
        }

        // handle D chord 2
        if (noteValue === "D" && button === "2") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["E3", "G3", "A#3", "D4"], "4n");
                setWhichChord("E half-diminished 7th");
                setChordNotes("E - G - A# - D");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["E3", "G3", "B3", "D4"], "4n");
                setWhichChord("E minor 7th");
                setChordNotes("E - G - B - D");
            }
        }

        // handle D chord 3
        if (noteValue === "D" && button === "3") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["F3", "A3", "C4", "E4"], "4n");
                setWhichChord("F major 7th");
                setChordNotes("F - A - C - E");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["F#3", "A3", "C#4", "E4"], "4n");
                setWhichChord("F# minor 7th");
                setChordNotes("F# - A - C# - E");
            }
        }

        // handle D chord 4
        if (noteValue === "D" && button === "4") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["G3", "A#3", "D4", "F4"], "4n");
                setWhichChord("G minor 7th");
                setChordNotes("G - A# - D - F");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["G3", "B3", "D4", "F#4"], "4n");
                setWhichChord("G major 7th");
                setChordNotes("G - B - D - F#");
            }
        }

        // handle D chord 5
        if (noteValue === "D" && button === "5") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["A3", "C4", "E4", "G4"], "4n");
                setWhichChord("A minor 7th");
                setChordNotes("A - C - E - G");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["A3", "C#4", "E4", "G4"], "4n");
                setWhichChord("A dominant 7th");
                setChordNotes("A - C# - E - G");
            }
        }

        // handle D chord 6
        if (noteValue === "D" && button === "6") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["A#3", "D4", "F4", "A4"], "4n");
                setWhichChord("Bb major 7th");
                setChordNotes("A# - D - F - A");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["B3", "D4", "F#4", "A4"], "4n");
                setWhichChord("B minor 7th");
                setChordNotes("B - D - F# - A");
            }
        }

        // handle D chord 7
        if (noteValue === "D" && button === "7") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["C4", "E4", "G4", "A#4"], "4n");
                setWhichChord("C dominant 7th");
                setChordNotes("C - E - G - A#");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["C#4", "E4", "G4", "B4"], "4n");
                setWhichChord("C# half-diminished 7th");
                setChordNotes("C# - E - G - B");
            }
        }

        /*--------------------------------------------------------------------*/

        // HANDLE ALL CHORDS IN D#/Eb

        // handle D#/Eb chord 1
        if (noteValue === "D#/Eb" && button === "1") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["D#3", "F#3", "A#3", "C#4"], "4n");
                setWhichChord("D# minor 7th");
                setChordNotes("D# - F# - A# - C#");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["D#3", "G3", "A#3", "D4"], "4n");
                setWhichChord("D# major 7th");
                setChordNotes("D# - G - A# - D");
            }
        }

        // handle D#/Eb chord 2
        if (noteValue === "D#/Eb" && button === "2") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["F3", "G#3", "B3", "D#4"], "4n");
                setWhichChord("E# half-diminished 7th");
                setChordNotes("E# - G# - B - D#");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["F3", "G#3", "C4", "D#4"], "4n");
                setWhichChord("E# minor 7th");
                setChordNotes("F - G# - C - D#");
            }
        }

        // handle D#/Eb chord 3
        if (noteValue === "D#/Eb" && button === "3") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["F#3", "A#3", "C#4", "F4"], "4n");
                setWhichChord("F# major 7th");
                setChordNotes("F# - A# - C# - F");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["G3", "A#3", "D4", "F4"], "4n");
                setWhichChord("F## minor 7th");
                setChordNotes("G - A# - D - F");
            }
        }

        // handle D#/Eb chord 4
        if (noteValue === "D#/Eb" && button === "4") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["G#3", "B3", "D#4", "F#4"], "4n");
                setWhichChord("G# minor 7th");
                setChordNotes("G# - B - D# - F#");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["G#3", "C4", "D#4", "G4"], "4n");
                setWhichChord("G# major 7th");
                setChordNotes("G# - C - D# - G");
            }
        }

        // handle D#/Eb chord 5
        if (noteValue === "D#/Eb" && button === "5") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["A#3", "C#4", "F4", "G#4"], "4n");
                setWhichChord("A# minor 7th");
                setChordNotes("A# - C# - F - G#");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["A#3", "D4", "F4", "G#4"], "4n");
                setWhichChord("A# dominant 7th");
                setChordNotes("A# - D - F - G#");
            }
        }

        // handle D#/Eb chord 6
        if (noteValue === "D#/Eb" && button === "6") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["B3", "D#4", "F#4", "A#4"], "4n");
                setWhichChord("B major 7th");
                setChordNotes("B - D# - F# - A#");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["C4", "D#4", "G4", "A#4"], "4n");
                setWhichChord("B# minor 7th");
                setChordNotes("C - D# - G - A#");
            }
        }

        // handle D#/Eb chord 7
        if (noteValue === "D#/Eb" && button === "7") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["C#4", "F4", "G#4", "B4"], "4n");
                setWhichChord("C# dominant 7th");
                setChordNotes("C# - F - G# - B");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["D4", "F4", "G#4", "C5"], "4n");
                setWhichChord("C## half-diminished 7th");
                setChordNotes("D - F - G# - C");
            }
        }

        /*--------------------------------------------------------------------*/

        // HANDLE ALL CHORDS IN E

        // handle E chord 1
        if (noteValue === "E" && button === "1") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["E3", "G3", "B3", "D4"], "4n");
                setWhichChord("E minor 7th");
                setChordNotes("E - G - B - D");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["E3", "G#3", "B3", "D#4"], "4n");
                setWhichChord("E major 7th");
                setChordNotes("E - G# - B - D#");
            }
        }

        // handle E chord 2
        if (noteValue === "E" && button === "2") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["F#3", "A3", "C4", "E4"], "4n");
                setWhichChord("F# half-diminished 7th");
                setChordNotes("F# - A - C - E");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["F#3", "A3", "C#4", "E4"], "4n");
                setWhichChord("F# minor 7th");
                setChordNotes("F# - A - C# - E");
            }
        }

        // handle E chord 3
        if (noteValue === "E" && button === "3") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["G3", "B3", "D4", "F#4"], "4n");
                setWhichChord("G major 7th");
                setChordNotes("G - B - D - F#");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["G#3", "B3", "D#4", "F#4"], "4n");
                setWhichChord("G# minor 7th");
                setChordNotes("G# - B - D# - F#");
            }
        }

        // handle E chord 4
        if (noteValue === "E" && button === "4") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["A3", "C4", "E4", "G4"], "4n");
                setWhichChord("A minor 7th");
                setChordNotes("A - C - E - G");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["A3", "C#4", "E4", "G#4"], "4n");
                setWhichChord("A major 7th");
                setChordNotes("A - C# - E - G#");
            }
        }

        // handle E chord 5
        if (noteValue === "E" && button === "5") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["B3", "D4", "F#4", "A4"], "4n");
                setWhichChord("B minor 7th");
                setChordNotes("B - D - F# - A");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["B3", "D#4", "F#4", "A4"], "4n");
                setWhichChord("B dominant 7th");
                setChordNotes("B - D# - F# - A");
            }
        }

        // handle E chord 6
        if (noteValue === "E" && button === "6") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["C4", "E4", "G4", "B4"], "4n");
                setWhichChord("C major 7th");
                setChordNotes("C - E - G - B");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["C#4", "E4", "G#4", "B4"], "4n");
                setWhichChord("C# minor 7th");
                setChordNotes("C# - E - G# - B");
            }
        }

        // handle E chord 7
        if (noteValue === "E" && button === "7") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["D4", "F#4", "A4", "C5"], "4n");
                setWhichChord("D dominant 7th");
                setChordNotes("D - F# - A - C");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["D#4", "F#4", "A4", "C#5"], "4n");
                setWhichChord("D# half-diminished 7th");
                setChordNotes("D# - F# - A - C#");
            }
        }
        /*--------------------------------------------------------------------*/

        // HANDLE ALL CHORDS IN F

        // handle F chord 1
        if (noteValue === "F" && button === "1") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["F3", "G#3", "C4", "D#4"], "4n");
                setWhichChord("F minor 7th");
                setChordNotes("F - G# - C - D#");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["F3", "A3", "C4", "E4"], "4n");
                setWhichChord("F major 7th");
                setChordNotes("F - A - C - E");
            }
        }

        // handle F chord 2
        if (noteValue === "F" && button === "2") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["G3", "A#3", "C#4", "F4"], "4n");
                setWhichChord("G half-diminished 7th");
                setChordNotes("G - A# - C# - F");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["G3", "A#3", "D4", "F4"], "4n");
                setWhichChord("G minor 7th");
                setChordNotes("G - A# - D - F");
            }
        }

        // handle F chord 3
        if (noteValue === "F" && button === "3") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["G#3", "C4", "D#4", "G4"], "4n");
                setWhichChord("Ab major 7th");
                setChordNotes("G# - C - D# - G");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["A3", "C4", "E4", "G4"], "4n");
                setWhichChord("A minor 7th");
                setChordNotes("A - C - E - G");
            }
        }

        // handle F chord 4
        if (noteValue === "F" && button === "4") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["A#3", "C#4", "F4", "G#4"], "4n");
                setWhichChord("Bb minor 7th");
                setChordNotes("Bb - C# - F - G#");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["A#3", "D4", "F4", "A4"], "4n");
                setWhichChord("Bb major 7th");
                setChordNotes("Bb - D - F - A");
            }
        }

        // handle F chord 5
        if (noteValue === "F" && button === "5") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["C4", "D#4", "G4", "A#4"], "4n");
                setWhichChord("C minor 7th");
                setChordNotes("C - D# - G - A#");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["C4", "E4", "G4", "A#4"], "4n");
                setWhichChord("C dominant 7th");
                setChordNotes("C - E - G - A#");
            }
        }

        // handle F chord 6
        if (noteValue === "F" && button === "6") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["C#4", "F4", "G#4", "C5"], "4n");
                setWhichChord("Db major 7th");
                setChordNotes("Db - F - Ab - C");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["D4", "F4", "A4", "C5"], "4n");
                setWhichChord("D minor 7th");
                setChordNotes("D - F - A - C");
            }
        }

        // handle F chord 7
        if (noteValue === "F" && button === "7") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["D#4", "G4", "A#4", "C#5"], "4n");
                setWhichChord("Eb dominant 7th");
                setChordNotes("Eb - G - A# - C#");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["E4", "G4", "A#4", "D5"], "4n");
                setWhichChord("E half-diminished 7th");
                setChordNotes("E - G - A# - D");
            }
        }

        /*--------------------------------------------------------------------*/

        // HANDLE ALL CHORDS IN F#/Gb

        // handle F#/Gb chord 1
        if (noteValue === "F#/Gb" && button === "1") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["F#3", "A3", "C#4", "E4"], "4n");
                setWhichChord("F# minor 7th");
                setChordNotes("F# - A - C# - E");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["F#3", "A#3", "C#4", "F4"], "4n");
                setWhichChord("F# major 7th");
                setChordNotes("F# - A# - C# - F");
            }
        }

        // handle F#/Gb chord 2
        if (noteValue === "F#/Gb" && button === "2") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["G#3", "B3", "D4", "F#4"], "4n");
                setWhichChord("G# half-diminished 7th");
                setChordNotes("G# - B - D - F#");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["G#3", "B3", "D#4", "F#4"], "4n");
                setWhichChord("G# minor 7th");
                setChordNotes("G# - B - D# - F#");
            }
        }

        // handle F#/Gb chord 3
        if (noteValue === "F#/Gb" && button === "3") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["A3", "C#4", "E4", "G#4"], "4n");
                setWhichChord("A major 7th");
                setChordNotes("A - C# - E - G#");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["A#3", "C#4", "F4", "G#4"], "4n");
                setWhichChord("A# minor 7th");
                setChordNotes("A# - C# - F - G#");
            }
        }

        // handle F#/Gb chord 4
        if (noteValue === "F#/Gb" && button === "4") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["B3", "D4", "F#4", "A4"], "4n");
                setWhichChord("B minor 7th");
                setChordNotes("B - D - F# - A");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["B3", "D#4", "F#4", "A#4"], "4n");
                setWhichChord("B major 7th");
                setChordNotes("B - D# - F# - A#");
            }
        }

        // handle F#/Gb chord 5
        if (noteValue === "F#/Gb" && button === "5") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["C#4", "E4", "G#4", "B4"], "4n");
                setWhichChord("C# minor 7th");
                setChordNotes("C# - E - G# - B");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["C#4", "F4", "G#4", "B4"], "4n");
                setWhichChord("C# dominant 7th");
                setChordNotes("C# - F - G# - B");
            }
        }

        // handle F#/Gb chord 6
        if (noteValue === "F#/Gb" && button === "6") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["D4", "F#4", "A4", "C#5"], "4n");
                setWhichChord("D major 7th");
                setChordNotes("D - F# - A - C#");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["D#4", "F#4", "A#4", "C#5"], "4n");
                setWhichChord("D# minor 7th");
                setChordNotes("D# - F# - A# - C#");
            }
        }

        // handle F#/Gb chord 7
        if (noteValue === "F#/Gb" && button === "7") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["E4", "G#4", "B4", "D5"], "4n");
                setWhichChord("E dominant 7th");
                setChordNotes("E - G# - B - D");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["F4", "G#4", "B4", "D#5"], "4n");
                setWhichChord("E# half-diminished 7th");
                setChordNotes("E# - G# - B - D#");
            }
        }

        /*--------------------------------------------------------------------*/

        // HANDLE ALL CHORDS IN G

        // handle G chord 1
        if (noteValue === "G" && button === "1") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["G3", "A#3", "D4", "F4"], "4n");
                setWhichChord("G minor 7th");
                setChordNotes("G - A# - D - F");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["G3", "B3", "D4", "F#4"], "4n");
                setWhichChord("G major 7th");
                setChordNotes("G - B - D - F#");
            }
        }

        // handle G chord 2
        if (noteValue === "G" && button === "2") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["A3", "C4", "D#4", "G4"], "4n");
                setWhichChord("A half-diminished 7th");
                setChordNotes("A - C - D# - G");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["A3", "C4", "E4", "G4"], "4n");
                setWhichChord("A minor 7th");
                setChordNotes("A - C - E - G");
            }
        }

        // handle G chord 3
        if (noteValue === "G" && button === "3") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["A#3", "D4", "F4", "A4"], "4n");
                setWhichChord("Bb major 7th");
                setChordNotes("Bb - D - F - A");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["B3", "D4", "F#4", "A4"], "4n");
                setWhichChord("A# minor 7th");
                setChordNotes("A# - C# - F - G#");
            }
        }

        // handle G chord 4
        if (noteValue === "G" && button === "4") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["C4", "D#4", "G4", "A#4"], "4n");
                setWhichChord("C minor 7th");
                setChordNotes("C - D# - G - A#");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["C4", "E4", "G4", "B4"], "4n");
                setWhichChord("C major 7th");
                setChordNotes("C - E - G - B");
            }
        }

        // handle G chord 5
        if (noteValue === "G" && button === "5") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["D4", "F4", "A4", "C5"], "4n");
                setWhichChord("D minor 7th");
                setChordNotes("D - F - A - C");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["D4", "F#4", "A4", "C5"], "4n");
                setWhichChord("D dominant 7th");
                setChordNotes("D - F# - A - C");
            }
        }

        // handle G chord 6
        if (noteValue === "G" && button === "6") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["D#4", "G4", "A#4", "D5"], "4n");
                setWhichChord("Eb major 7th");
                setChordNotes("Eb - G - A# - D");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["E4", "G4", "B4", "D5"], "4n");
                setWhichChord("E minor 7th");
                setChordNotes("E - G - B - D");
            }
        }

        // handle G chord 7
        if (noteValue === "G" && button === "7") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["F4", "A4", "C5", "D#5"], "4n");
                setWhichChord("F dominant 7th");
                setChordNotes("F - A - C - D#");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["F#4", "A4", "C5", "E5"], "4n");
                setWhichChord("F# half-diminished 7th");
                setChordNotes("F# - A - C - E");
            }
        }

        /*--------------------------------------------------------------------*/

        // HANDLE ALL CHORDS IN G#/Ab

        // handle G#/Ab chord 1
        if (noteValue === "G#/Ab" && button === "1") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["G#3", "B3", "D#4", "F#4"], "4n");
                setWhichChord("G# minor 7th");
                setChordNotes("G# - B - D# - F#");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["G#3", "C4", "D#4", "G4"], "4n");
                setWhichChord("G# major 7th");
                setChordNotes("G# - C - D# - G");
            }
        }

        // handle G#/Ab chord 2
        if (noteValue === "G#/Ab" && button === "2") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["A#3", "C#4", "E4", "G#4"], "4n");
                setWhichChord("A# half-diminished 7th");
                setChordNotes("A# - C# - E - G#");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["A#3", "C#4", "F4", "G#4"], "4n");
                setWhichChord("A# minor 7th");
                setChordNotes("A# - C# - F - G#");
            }
        }

        // handle G#/Ab chord 3
        if (noteValue === "G#/Ab" && button === "3") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["B3", "D#4", "F#4", "A#4"], "4n");
                setWhichChord("B major 7th");
                setChordNotes("B - D# - F# - A#");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["C4", "D#4", "G4", "A#4"], "4n");
                setWhichChord("B# minor 7th");
                setChordNotes("B# - D# - G - A#");
            }
        }

        // handle G#/Ab chord 4
        if (noteValue === "G#/Ab" && button === "4") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["C#4", "E4", "G#4", "B4"], "4n");
                setWhichChord("C# minor 7th");
                setChordNotes("C# - E - G# - B");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["C#4", "F4", "G#4", "C5"], "4n");
                setWhichChord("C# major 7th");
                setChordNotes("C# - F - G# - C");
            }
        }

        // handle G#/Ab chord 5
        if (noteValue === "G#/Ab" && button === "5") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["D#4", "F#4", "A#4", "C#5"], "4n");
                setWhichChord("D# minor 7th");
                setChordNotes("D# - F# - A# - C#");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["D#4", "G4", "A#4", "C#5"], "4n");
                setWhichChord("D# dominant 7th");
                setChordNotes("D# - G - A# - C#");
            }
        }

        // handle G#/Ab chord 6
        if (noteValue === "G#/Ab" && button === "6") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["E4", "G#4", "B4", "D#5"], "4n");
                setWhichChord("E major 7th");
                setChordNotes("E - G# - B - D#");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["F4", "G#4", "C5", "D#5"], "4n");
                setWhichChord("F minor 7th");
                setChordNotes("F - G# - C - D#");
            }
        }

        // handle G#/Ab chord 7
        if (noteValue === "G#/Ab" && button === "7") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["F#3", "A#3", "C#4", "E4"], "4n");
                setWhichChord("F# dominant 7th");
                setChordNotes("F# - A# - C# - E");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["G3", "A#3", "C#4", "F4"], "4n");
                setWhichChord("F## half-diminished 7th");
                setChordNotes("G - A# - C# - F");
            }
        }

        /*--------------------------------------------------------------------*/

        // HANDLE ALL CHORDS IN A

        // handle A chord 1
        if (noteValue === "A" && button === "1") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["A3", "C4", "E4", "G4"], "4n");
                setWhichChord("A minor 7th");
                setChordNotes("A - C - E - G");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["A3", "C#4", "E4", "G#4"], "4n");
                setWhichChord("A major 7th");
                setChordNotes("A - C# - E - G#");
            }
        }

        // handle A chord 2
        if (noteValue === "A" && button === "2") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["B3", "D4", "F4", "A4"], "4n");
                setWhichChord("B half-diminished 7th");
                setChordNotes("B - D - F - A");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["B3", "D4", "F#4", "A4"], "4n");
                setWhichChord("B minor 7th");
                setChordNotes("B - D - F# - A");
            }
        }

        // handle A chord 3
        if (noteValue === "A" && button === "3") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["C4", "E4", "G4", "B4"], "4n");
                setWhichChord("C major 7th");
                setChordNotes("C - E - G - B");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["C#4", "E4", "G#4", "B4"], "4n");
                setWhichChord("C# minor 7th");
                setChordNotes("C# - E - G# - B");
            }
        }

        // handle A chord 4
        if (noteValue === "A" && button === "4") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["D4", "F4", "A4", "C5"], "4n");
                setWhichChord("D minor 7th");
                setChordNotes("D - F - A - C");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["D4", "F#4", "A4", "C#5"], "4n");
                setWhichChord("D major 7th");
                setChordNotes("D - F# - A - C#");
            }
        }

        // handle A chord 5
        if (noteValue === "A" && button === "5") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["E4", "G4", "B4", "D5"], "4n");
                setWhichChord("E minor 7th");
                setChordNotes("E - G - B - D");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["E4", "G#4", "B4", "D5"], "4n");
                setWhichChord("E dominant 7th");
                setChordNotes("E - G# - B - D");
            }
        }

        // handle A chord 6
        if (noteValue === "A" && button === "6") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["F3", "A3", "C4", "E4"], "4n");
                setWhichChord("F major 7th");
                setChordNotes("F - A - C - E");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["F#3", "A3", "C#4", "E4"], "4n");
                setWhichChord("F# minor 7th");
                setChordNotes("F# - A - C# - E");
            }
        }

        // handle A chord 7
        if (noteValue === "A" && button === "7") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["G3", "B3", "D4", "F4"], "4n");
                setWhichChord("G dominant 7th");
                setChordNotes("G - B - D - F");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["G#3", "B3", "D4", "F#4"], "4n");
                setWhichChord("G# half-diminished 7th");
                setChordNotes("G# - B - D - F#");
            }
        }

        /*--------------------------------------------------------------------*/

        // HANDLE ALL CHORDS IN A#/Bb

        // handle A#/Bb chord 1
        if (noteValue === "A#/Bb" && button === "1") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["A#3", "C#4", "F4", "G#4"], "4n");
                setWhichChord("A minor 7th");
                setChordNotes("A - C - E - G");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["A#3", "D4", "F4", "A4"], "4n");
                setWhichChord("A# major 7th");
                setChordNotes("A# - D - F - A");
            }
        }

        // handle A#/Bb chord 2
        if (noteValue === "A#/Bb" && button === "2") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["C4", "D#4", "F#4", "A#4"], "4n");
                setWhichChord("B# half-diminished 7th");
                setChordNotes("B# - D# - F# - A#");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["C4", "D#4", "G4", "A#4"], "4n");
                setWhichChord("B# minor 7th");
                setChordNotes("B# - D# - G - A#");
            }
        }

        // handle A#/Bb chord 3
        if (noteValue === "A#/Bb" && button === "3") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["C#4", "F4", "G#4", "C5"], "4n");
                setWhichChord("C# major 7th");
                setChordNotes("C# - F - G# - C");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["D4", "F4", "A4", "C5"], "4n");
                setWhichChord("C## minor 7th");
                setChordNotes("D - F - A - C");
            }
        }

        // handle A#/Bb chord 4
        if (noteValue === "A#/Bb" && button === "4") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["D#4", "F#4", "A#4", "C#5"], "4n");
                setWhichChord("D# minor 7th");
                setChordNotes("D# - F# - A# - C#");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["D#4", "G4", "A#4", "D5"], "4n");
                setWhichChord("D# major 7th");
                setChordNotes("D# - G - A# - D");
            }
        }

        // handle A#/Bb chord 5
        if (noteValue === "A#/Bb" && button === "5") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["F4", "G#4", "C5", "D#5"], "4n");
                setWhichChord("E# minor 7th");
                setChordNotes("E# - G# - C - D#");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["F4", "A4", "C5", "D#5"], "4n");
                setWhichChord("E# dominant 7th");
                setChordNotes("E# - A - C - D#");
            }
        }

        // handle A#/Bb chord 6
        if (noteValue === "A#/Bb" && button === "6") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["F#3", "A#3", "C#4", "F4"], "4n");
                setWhichChord("F# major 7th");
                setChordNotes("F# - A# - C# - F");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["G3", "A#3", "D4", "F4"], "4n");
                setWhichChord("F## minor 7th");
                setChordNotes("G - A# - D - F");
            }
        }

        // handle A#/Bb chord 7
        if (noteValue === "A#/Bb" && button === "7") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["G#3", "C4", "D#4", "F#4"], "4n");
                setWhichChord("G# dominant 7th");
                setChordNotes("G# - C - D# - F#");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["A3", "C4", "D#4", "G4"], "4n");
                setWhichChord("G## half-diminished 7th");
                setChordNotes("A - C - D# - G");
            }
        }

        /*--------------------------------------------------------------------*/

        // HANDLE ALL CHORDS IN B

        // handle B chord 1
        if (noteValue === "B" && button === "1") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["B3", "D4", "F#4", "A4"], "4n");
                setWhichChord("B minor 7th");
                setChordNotes("B - D - F# - A");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["B3", "D#4", "F#4", "A#4"], "4n");
                setWhichChord("B major 7th");
                setChordNotes("B - D# - F# - A#");
            }
        }

        // handle B chord 2
        if (noteValue === "B" && button === "2") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["C#4", "E4", "G4", "B4"], "4n");
                setWhichChord("C# half-diminished 7th");
                setChordNotes("C# - E - G - B");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["C#4", "E4", "G#4", "B4"], "4n");
                setWhichChord("C# minor 7th");
                setChordNotes("C# - E - G# - B");
            }
        }

        // handle B chord 3
        if (noteValue === "B" && button === "3") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["D4", "F#4", "A4", "C#5"], "4n");
                setWhichChord("D major 7th");
                setChordNotes("D - F# - A - C#");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["D#4", "F#4", "A#4", "C#5"], "4n");
                setWhichChord("D# minor 7th");
                setChordNotes("D# - F# - A# - C#");
            }
        }

        // handle B chord 4
        if (noteValue === "B" && button === "4") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["E4", "G4", "B4", "D5"], "4n");
                setWhichChord("E minor 7th");
                setChordNotes("E - G - B - D");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["E4", "G#4", "B4", "D#5"], "4n");
                setWhichChord("E major 7th");
                setChordNotes("E - G# - B - D#");
            }
        }

        // handle B chord 5
        if (noteValue === "B" && button === "5") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["F#3", "A3", "C#4", "E4"], "4n");
                setWhichChord("E# minor 7th");
                setChordNotes("E# - G# - C - D#");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["F#3", "A#3", "C#4", "E4"], "4n");
                setWhichChord("F# dominant 7th");
                setChordNotes("F# - A# - C# - E");
            }
        }

        // handle B chord 6
        if (noteValue === "B" && button === "6") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["G3", "B3", "D4", "F#4"], "4n");
                setWhichChord("G major 7th");
                setChordNotes("G - B - D - F#");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["G#3", "B3", "D#4", "F#4"], "4n");
                setWhichChord("G# minor 7th");
                setChordNotes("G# - B - D# - F#");
            }
        }

        // handle B chord 7
        if (noteValue === "B" && button === "7") {
            if (chordValue === "minor") {
                synth.triggerAttackRelease(["A3", "C#4", "E4", "G4"], "4n");
                setWhichChord("A dominant 7th");
                setChordNotes("A - C# - E - G");
            } else if (chordValue === "major") {
                synth.triggerAttackRelease(["A#3", "C#4", "E4", "G#4"], "4n");
                setWhichChord("A# half-diminished 7th");
                setChordNotes("A# - C# - E - G#");
            }
        }
    };

    useEffect(() => {
        document.addEventListener("click", playChord);

        return () => {
            document.removeEventListener("click", playChord);
        };
    }, [playChord]);

    return (
        <div>
            <h1 className="title">Theory Thing</h1>
            <MiniNav />
            <h4 className="select-scale">1. Select Root Note</h4>

            <div className="keys">
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

            <h4 className="select-scale">2. Select Scale</h4>
            <div className="minormajor">
                <h3 className="scaleChoice" onClick={updateChordValue}>
                    major
                </h3>
                <h3 className="scaleChoice" onClick={updateChordValue}>
                    minor
                </h3>
            </div>
            <h4 className="select-scale">3. Press To Play Chord</h4>

            <div className="mobile-buttons">
                <button className="chord-button" onClick={() => playChord("1")}>
                    Chord 1
                </button>
                <button className="chord-button" onClick={() => playChord("2")}>
                    Chord 2
                </button>
                <button className="chord-button" onClick={() => playChord("3")}>
                    Chord 3
                </button>
                <button className="chord-button" onClick={() => playChord("4")}>
                    Chord 4
                </button>
                <button className="chord-button" onClick={() => playChord("5")}>
                    Chord 5
                </button>
                <button className="chord-button" onClick={() => playChord("6")}>
                    Chord 6
                </button>
                <button className="chord-button" onClick={() => playChord("7")}>
                    Chord 7
                </button>
            </div>

            <h1 className="scaleInfo">
                Scale:&nbsp;<span className="noteValue">{noteValue}</span>&nbsp;
                <span className="chordValue">{chordValue}</span>
            </h1>

            <h5 className="scaleInfo">{whichChord}</h5>
            <h5 className="scaleInfo">Notes played: [{chordNotes}]</h5>

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

export default Mobile;
