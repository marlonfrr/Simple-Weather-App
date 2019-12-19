import {INCREMENT} from "../constants";
import {DECREMENT} from "../constants";

export const counterIncrement = () => {
  return {
    type: INCREMENT,
  };
};
export const counterDecrement = () => {
  return {
    type: DECREMENT,
  };
};
