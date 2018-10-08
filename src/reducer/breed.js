export default function breedREducer(state = "", action) {
  if (action.type === "SET_BREED") {
    return action.payload;
  } else if (action.type === "SET_ANIMAL") {
    return "";
  } else {
    return state;
  }
}
