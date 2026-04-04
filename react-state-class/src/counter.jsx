import { useState } from "react";

function init(){
    return Math.random();
}
 

export default function Counter() {
    const [count, setCount] = useState(init);

    let incCount = () => {
        setCount((currCount) => {
            return currCount + 1;
        });
        
      
    };

    return (
        <div>
            <h1>Count = {count}</h1>
            <button onClick={incCount}>Increase Count</button>
        </div>
    );
}