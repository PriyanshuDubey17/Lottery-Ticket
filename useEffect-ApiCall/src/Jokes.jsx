import { useState, useEffect } from "react";

export default function Jokes() {
    let [joke, setJoke] = useState({ setup: "", punchline: "" });

    const URL = "https://official-joke-api.appspot.com/random_joke";

    const getNewJokes = async () => {
        try {
            let result = await fetch(URL);
            let jsonResult = await result.json();
            console.log(jsonResult);
            setJoke({
                setup: jsonResult.setup,
                punchline: jsonResult.punchline
            });
        } catch (error) {
            console.error("Failed to fetch joke:", error);
        }
    };

    useEffect(() => {
        const fetchJoke = async () => {
            try {
                let result = await fetch(URL);
                let jsonResult = await result.json();
                console.log(jsonResult);
                setJoke({
                    setup: jsonResult.setup,
                    punchline: jsonResult.punchline
                });
            } catch (error) {
                console.error("Failed to fetch joke:", error);
            }
        };
        fetchJoke();
    }, []);

    return (
        <div>
            <h1>Random Jokes</h1>
            <h3>{joke.setup}</h3>
            <h3>{joke.punchline}</h3>
            <button onClick={getNewJokes}>New Joke</button>
        </div>
    );
}
