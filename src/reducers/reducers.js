import {combineReducers} from 'redux'

import {login} from './userReducer';
import {register} from './userReducer'

const rootReducer=combineReducers({login, register})


export default rootReducer;