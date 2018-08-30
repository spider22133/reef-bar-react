import {combineReducers} from 'redux';

import posts from './posts-reducer';
import static_page from './static-page';
import menu from './menu-reducer';
import tags from './tag-reducer';
import cat from './cat-reducer';
import comments from './comments-reducer';
import routerMatch from './routerMatch-reducer';

export default combineReducers({
    posts,
    static_page,
    menu,
    tags,
    cat,
    comments,
    routerMatch
});
