import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {rootReduce} from './reducer/reducer';


// const composed = compose( window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))
// const store = createStore(rootReduce, composed) ;

const composeEnharcer= window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const store= createStore(rootReduce, composeEnharcer(applyMiddleware(thunk)));


export default store;