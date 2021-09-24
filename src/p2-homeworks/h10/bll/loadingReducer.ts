enum ACTION_TYPES {
    IS_LOADING= 'isLoading/IS_LOADING',
}

type InitStateType = {
    isLoading:boolean
}
const initState = {
    isLoading:false
}
export type ActionType = LoadingType
export const loadingReducer = (state:InitStateType = initState, action: ActionType): InitStateType => { // fix any
    switch (action.type) {
        case ACTION_TYPES.IS_LOADING:
            return {...state, isLoading:action.isLoading}
        default: return state
    }
}

type LoadingType = {
    type: ACTION_TYPES.IS_LOADING,
    isLoading:boolean
}
export const loadingAC = (isLoading:boolean):LoadingType => {
    return {
        type: ACTION_TYPES.IS_LOADING,
        isLoading,
    }
}