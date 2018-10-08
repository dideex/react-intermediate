export default function locationReducer(state = "Seattle, WA", action) {
  // const newState = Object.assign({}, state)
  // return {...state, location: action.payload}
  if (action.type === "SET_LOCATION") {
    return action.payload;
  } else {
    return state;
  }
}

// test("locationREducer", () => {
//   exprect(locationReducer('Seattle, WA', {type: "SET_LOCATION", payload: "San Francisco, CA"})
//     .toBe("San Francisco, CA"))
// })