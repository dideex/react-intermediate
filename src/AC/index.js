import { pf } from 'petfinder-client';


export function changeAnimal(animal) {
  return { type: "SET_ANIMAL", payload: animal };
}

export const changeLocation = location => ({
  type: "SET_LOCATOIN",
  payload: location
});

export const changeBreed = breed => ({
  type: "SET_BREED",
  payload: breed
});

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

export const getBreeds = () => {
  return function getGreedsThunk(dispatch, getState) {
    const {animal} = getState()
    if (animal) {
      petfinder.breed
        .list({ animal: animal })
        .then(data => {
          if (
            data.petfinder &&
            data.petfinder.breeds &&
            Array.isArray(data.petfinder.breeds.breed)
          ) {
            dispatch({
              type: 'SET_BREEDS',
              payload: data.petfinder.breeds.breed
            });
          } else {
            dispatch({
              type: 'SET_BREEDS',
              payload: []
            });
          }
        })
        .catch(console.error);
    } else {
      dispatch({
        type: 'SET_BREEDS',
        payload: []
      });
    }
  }
}