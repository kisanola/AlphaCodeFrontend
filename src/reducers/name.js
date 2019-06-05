import initialState from '../store/initialState';
import {
    CHANGE_NAME
} from '../actionTypes';

const name = (state = initialState.name, { type, payload }) => {

    switch (type) {
        case CHANGE_NAME:
            return {
                ...state,
                team: payload
            }
        default:
            return state;
    }
};

export default name;
