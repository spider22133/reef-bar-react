import {FETCH_SPAGE} from '../actions';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_SPAGE:
            return action.payload;
    }
    return state;
}
