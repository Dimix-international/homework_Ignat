import React from 'react'
import {checkPeopleAC, homeWorkReducer, sortAC} from '../homeWorkReducer'

let initialState: any[] // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 15},
        {_id: 6, name: 'Яна', age: 75},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, sortAC('up'))

    expect(newState[0].name).toBe('Александр');
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, sortAC('down'))
    expect(newState[0].name).toBe('Яна');
})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, checkPeopleAC(18))
    expect(newState[0].age).toBe(66);
    expect(newState.length).toBe(4);
})
