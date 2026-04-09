import { useState } from "react";

export default function Joker() {
  const [joke, setJoke] = useState(null);
  const [showPunchline, setShowPunchline] = useState(false);
  const [loading, setLoading] = useState(false);

  const getNewJoke = async () => {
    setLoading(true);
    setShowPunchline(false); // hide punchline when new joke loads

    try {
      const response = await fetch("https://official-joke-api.appspot.com/random_joke");
      const data = await response.json();
      setJoke({ setup: data.setup, punchline: data.punchline });
    } catch (error) {
      console.error("Failed to fetch joke:", error);
    }

    setLoading(false);
  };

  return (
    <div>
      <h1>Joker 😂</h1>

      {loading && <p>Fetching joke...</p>}

      {!loading && joke && (
        <>
          <h2>{joke.setup}</h2>

          {showPunchline ? (
            <h3>{joke.punchline}</h3>
          ) : (
            <p>Can you guess the punchline?</p>
          )}

          <button onClick={() => setShowPunchline(p => !p)}>
            {showPunchline ? "Hide punchline" : "Reveal punchline"}
          </button>
        </>
      )}

      {!loading && !joke && <p>Click the button to get a joke!</p>}

      <button onClick={getNewJoke}>New Joke</button>
    </div>
  );
}