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
