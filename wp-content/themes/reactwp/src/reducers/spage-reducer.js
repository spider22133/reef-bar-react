import {FETCH_SPAGE} from '../actions';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_SPAGE:
            return {
                title: action.payload.yoast.title,
                content: action.payload.content.rendered,
                video: action.payload.acf.full_width_video_url,
            };
    }
    return state;
}
