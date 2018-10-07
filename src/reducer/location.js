export default function locationReducer(state = "Seattle, WA", action) {
  // const newState = Object.assign({}, state)
  // return {...state, location: action.payload}
  if (action.type === "SET_LOCATION") {
    return action.payload;
  } else {
    return state;
  }
}
