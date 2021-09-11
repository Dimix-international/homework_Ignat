import {PeopleType} from "../HW8";

type ActionType = SortType | СheckPeopleType;
export const homeWorkReducer = (state: Array<PeopleType>, action: ActionType): Array<PeopleType> => {
    switch (action.type) {
        case "SORT":
            const stateCopy = [...state];
            stateCopy.sort((a, b) => a.name < b.name ? -1 : 1);
            if (action.payload === 'down') {
                return stateCopy.reverse();
            }
            return stateCopy
        case "CHECK":
            return state.filter(m => m.age >= action.payload)
        default:
            return state
    }
}
type SortType = ReturnType<typeof sortAC>
export const sortAC = (payload: string) => {
    return {
        type: 'SORT',
        payload
    } as const
}
type СheckPeopleType = ReturnType<typeof checkPeopleAC>
export const checkPeopleAC = (payload: number) => {
    return {
        type: 'CHECK',
        payload
    } as const
}