import actionTypes from "../types";

function increment() {
  return { type: actionTypes.INCREMENT, payload: 2 };
}

function decrement() {
  return { type: actionTypes.DECREMENT, payload: 1 };
}

function reset() {
  return { type: actionTypes.RESET };
}

function resetTo100(){
  return { type: actionTypes.RESETTO100};
}

export default { increment, decrement, reset, resetTo100 };
