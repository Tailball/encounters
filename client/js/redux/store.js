import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import usersReducer from './users/users.reducer';
import encountersReducer from './encounters/encounters.reducer';


const reducers = combineReducers({
    users: usersReducer,
    encounters: encountersReducer
});

const store = createStore(reducers, composeWithDevTools());

export default store;