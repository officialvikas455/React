import { useState } from "react";

export default function LudoBoard(){
    let [moves, setMoves] = useState({
        blue: 0,
        red: 0,
        yellow: 0,
        green: 0
    });
    let [arr, setArr] = useState(["no moves"]);

    let updateBlue = () => {
        setMoves( (prevMoves)=> {
           return {...prevMoves, blue : prevMoves.blue + 1}
      });
      arr.push("blue moves");
      setArr(arr);
      console.log(arr);
};

    let updateYellow = () => {
        setMoves({...moves, yellow : moves.yellow + 1});
    }
    let updateGreen = () => {
        setMoves({...moves, green : moves.green + 1});
    }
    let updateRed = () => {
        setMoves({...moves, red : moves.red + 1});
    }

    return (
        <div>
            <h1>Game Begins!</h1>

            <p>Blue moves = {moves.blue}</p>
            <button 
                style={{backgroundColor: "blue", color: "white"}}
                onClick={updateBlue}
            >
                +1
            </button>

            <p>Yellow moves = {moves.yellow}</p>
            <button 
                style={{backgroundColor: "yellow", color: "black"}}
                onClick={updateYellow}
            >
                +1
            </button>

            <p>Green moves = {moves.green}</p>
            <button 
                style={{backgroundColor: "green", color: "white"}}
                onClick={updateGreen}
            >
                +1
            </button>

            <p>Red moves = {moves.red}</p>
            <button 
                style={{backgroundColor: "red", color: "white"}}
                onClick={updateRed}
            >
                +1
            </button>
        </div>
    );
}

