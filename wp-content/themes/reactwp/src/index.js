require('./sass/styles.scss');

import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import WebFont from 'webfontloader';
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import {createLogger} from 'redux-logger';
import {routerMiddleware, connectRouter, ConnectedRouter} from 'connected-react-router';


// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas,fab);


import rootReducer from './reducers';

const siteBaseUrl = RT_API.baseUrl.replace(['http://','https://'],'').replace(window.location.origin.replace(['http://','https://'],''), '');
const history = createBrowserHistory({basename: siteBaseUrl});
const store = createStore(
	connectRouter(history)(rootReducer),
	compose(
		applyMiddleware(
			routerMiddleware(history),
			promise(),
			thunk,
			createLogger()
		)
	)
);

WebFont.load({
    google: {
        families: ['Montserrat:400,500,600,700,800']
    }
});


// store.subscribe(()=>{
//     console.log('subscribe', store.getState());
// });

import Blog from './containers/blog';
import Search from './containers/search';
import Category from './containers/category';
import Tag from './containers/tag';
import Single from './containers/single';
import FrontPage from './containers/frontpage';
// import Services from './containers/services';


ReactDom.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Switch>
				<Route exact path="/" component={FrontPage}/>
				<Route exact path="/blog/" component={Blog}/>
				<Route path="/page/:pageNum" component={Blog}/>
				{/*<Route path="/services/:slag" component={Services}/>*/}
				<Route path="/search/:term" component={Search}/>
				<Route path="/category/:slug/page/:pageNum" component={Category}/>
				<Route path="/category/:slug/" component={Category}/>
				<Route path="/category/:parent/:slug/page/:pageNum" component={Category}/>
				<Route path="/category/:parent/:slug/" component={Category}/>
				<Route path="/tag/:slug/page/:pageNum" component={Tag}/>
				<Route path="/tag/:slug" component={Tag}/>
				<Route path="*" component={Single}/>
			</Switch>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('react-main')
);
