import { useEffect } from "react";

function FilmPeople() {
    useEffect(() => {
        fetch[
            "https://swapi.dev/api/films/"
        ].then( (response) => {
            //console.log({response});
            if (response.ok) { return response.json();
            }
            //debugger;
        }), then(data => {
            console.log(data.characters)
        });
    }, []);

    return FilmPeople();
}

