import { CHANGE_NAME } from "../actionTypes";

export const changeName = (name: string) => (dispatch: Function) => {
  // Do some actions
  dispatch({
    type: CHANGE_NAME,
    payload: name
  });
};
