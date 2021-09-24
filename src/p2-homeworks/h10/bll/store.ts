import {loadingReducer} from './loadingReducer'
import {combineReducers, createStore, Store} from "redux";

const reducers = combineReducers({
    loading: loadingReducer,

})

const store:Store<AppStoreType, any> = createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
