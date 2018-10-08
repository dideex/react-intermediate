import { combineReducers } from "redux";
import location from "./location";
import breed from "./breed";
import breeds from "./breeds";
import animal from "./animal";


export default combineReducers({
  location,
  breed,
  breeds,
  animal
});

/* 
state = {location: "Seattle, WA"}
action = {type: "SET_LOCATION", payload: "San Francisco, CA"}

const rootReducer = (state, action) => {
  switch(action.type) {
    case "SET_LOCATION":
      return location(state, action)
    ..
    ..
    ..
  }
} 
*/