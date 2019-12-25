import {combineReducers} from "redux";
import reducer1 from "./reducer";
// import reducer2 from "./reducer2";

export default combineReducers({
  counter: reducer1,
  //   hello: reducer2,
});
