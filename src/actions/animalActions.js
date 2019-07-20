export function fetchAnimals() {
    return (dispatch) => {
        dispatch({ type: 'LOADING_ANIMALS' });
        return fetch("/api/v1/animals")
            .then(response => response.json())
            .then(responseJSON => {
                dispatch({ type: "FETCH_ANIMALS", payload: responseJSON })
            })
    }
}

export function fetchAnimal(animals, id) {
    return (dispatch) => {
        dispatch(
            {
                type: "FETCH_ANIMAL",
                payload: animals.animals.find((animal) => animal.id === id)
            }
        );
    }
}