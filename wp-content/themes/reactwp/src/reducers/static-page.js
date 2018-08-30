import {FETCH_STATIC_PAGE} from '../actions';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_STATIC_PAGE:
            return action.payload;
    }
    return state;
}
