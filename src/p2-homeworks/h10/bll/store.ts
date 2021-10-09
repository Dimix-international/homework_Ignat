import {loadingReducer} from './loadingReducer'
import {combineReducers, createStore, Store} from "redux";
import {themeReducer} from "../../h12/bll/themeReducer";

const reducers = combineReducers({
    loading: loadingReducer,
    theme: themeReducer

})

const store:Store<AppStoreType, any> = createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
