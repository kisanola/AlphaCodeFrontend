import { CHANGE_NAME } from '../actionTypes';

export const changeName = (name) => dispatch => {
    // Do some actions
    dispatch({
        type: CHANGE_NAME,
        payload: name,
    });
}