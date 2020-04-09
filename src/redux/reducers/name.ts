import initialState from "../initialStates/name";
import { CHANGE_NAME } from "../actionTypes";
import Action from "../../Interfaces/Action";

const name = (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case CHANGE_NAME:
      return {
        ...state,
        team: payload
      };
    default:
      return state;
  }
};

export default name;
