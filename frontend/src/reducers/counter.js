import actionTypes from "../types";

const defaultState = {
  counter: 0,
};

export default function counterReducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return { ...state, counter: state.counter + action.payload };
    case actionTypes.DECREMENT:
      return { ...state, counter: state.counter - action.payload };
    case actionTypes.RESET:
      return { ...state, counter: 0 };
    case actionTypes.RESETTO100:
      return { ...state, counter: 100 };
    default:
      return state;
  }
}
