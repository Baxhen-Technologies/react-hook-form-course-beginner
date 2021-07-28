import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducers } from './store/reducers';

const composeEnhancers = composeWithDevTools({});

const store = createStore(reducers, composeEnhancers());

export { store };
