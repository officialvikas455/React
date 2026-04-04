function doSomething(event){
    event.preventDefault();
    console.log("Button was clicked!");
    console.log(event);
}

export default function Button(){
    return (
        <div>
            <button onClick={doSomething}>Click me!</button>
        </div>
    );
}