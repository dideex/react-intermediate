export default function locationBreeds(state = [], action) {
  if (action.type === "SET_BREEDS") {
    return action.payload;
  } else {
    return state;
  }
}
