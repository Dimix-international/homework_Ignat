export type ThemeType = {
    id:string,
    title: string
}
const initState = {
    backgroundTheme: {
        id:'1',
        title: 'white'
    } as ThemeType,
    themes: [
        {
            id:'1',
            title: 'white'
        },
        {
            id:'2',
            title: 'dark'
        },
        {
            id:'3',
            title: 'red'
        },
        {
            id:'4',
            title: 'some'
        },
    ]as Array<ThemeType>
};
type InitStateType = typeof initState
type ActionThemeReducerType = ChangeThemeType
export const themeReducer = (state:InitStateType = initState, action: ActionThemeReducerType): InitStateType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME":
            return {...state, backgroundTheme: {...action.payload}}
        default: return state;
    }
};
type ChangeThemeType = {
    type: 'CHANGE-THEME',
    payload: {
        id:string,
        title: string
    }
}
export const changeThemeAC = (theme:ThemeType):ChangeThemeType => {
    return {
        type: 'CHANGE-THEME',
        payload: {
            ...theme
        }
    }as const
};