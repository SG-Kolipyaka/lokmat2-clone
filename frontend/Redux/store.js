import { legacy_createStore } from "redux"
import { combineReducers,applyMiddleware } from "redux"
import thunk from "redux-thunk"
import {reducer as postReducer} from "./homeReducer/reducer"


const rootReducer=combineReducers({

postReducer

})


export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))