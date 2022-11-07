import {combineReducers} from 'redux';
import familyReducer from './familyReducer';

const rootReducer =combineReducers({
    familyList:familyReducer
});

export default rootReducer;