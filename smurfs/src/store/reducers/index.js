import { combineReducers } from 'redux'
import {formReducer} from './formReducer'
import { trollCardReducer } from './trollCardReducer'
import {pexelsReducer} from './pexelsReducer'
export default combineReducers({formReducer, trollCardReducer, pexelsReducer})
