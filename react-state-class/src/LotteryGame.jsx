import { useState } from "react"

function LotteryGame(){
    const [digit1, setDigit1] = useState("-");
    const [digit2, setDigit2] = useState("-");
    const [digit3, setDigit3] = useState("-");

    const [message, setMessage] = useState("");

    function generateTicket(){
        const num1 = Math.floor(Math.random() * 10);
        const num2 = Math.floor(Math.random() * 10);
        const num3 = Math.floor(Math.random() * 10);

        setDigit1(num1);
        setDigit2(num2);
        setDigit3(num3);

        const sum = num1 + num2 + num3;

        if(sum == 15){
            setMessage("🎉 You Won! The digits add up to 15!")
        }else{
            setMessage("😔 You Lost! The digits add up to " + sum + ". Try again!")
        }
    }
    
    return (
        <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}>
          <h1>🎰 Lottery Game</h1>
          <p>Press the button to generate your ticket!</p>
          <p>If the 3 digits sum = <b>15</b>, You win!</p>

          <div style={{ display: "flex", justifyContent: "center", gap: "20px", margin: "30px 0"}}>
            <div style={boxStyle}>{digit1}</div>
            <div style={boxStyle}>{digit2}</div>
            <div style={boxStyle}>{digit3}</div>

          </div> 
          <button onClick={generateTicket} style={buttonStyle}>
        Generate Ticket
        </button>
        <h2 style={{ marginTop: "30px" }}>{message}</h2>
        </div>

       
    );
}

const boxStyle = {
    width: "80px",
    height: "80px",
    fontSize: "36px",
    fontWeight: "bold",
    border: "2px solid black",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
  };
   
  const buttonStyle = {
    padding: "12px 30px",
    fontSize: "18px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  };
export default LotteryGame;
