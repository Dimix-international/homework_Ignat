import React, {useState} from 'react'
import {checkPeopleAC, homeWorkReducer, sortAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW8.module.css'


export type PeopleType = {
    _id:number
    name:string
    age: number
}
const initialPeople: Array<PeopleType> = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
    {_id: 6, name: 'Яна', age: 75},
]

function HW8() {
    const [people, setPeople] = useState<Array<PeopleType>>(initialPeople)

    const finalPeople = people.map((p: PeopleType) => (
            <div className={s.list} key={p._id}>
                <span className={s.name}>{p.name}</span>
                <span className={s.age}>{p.age}</span>
            </div>
    ))
    const chooseMethodOfSort = (payload:string) => {
        setPeople(homeWorkReducer(initialPeople, sortAC(payload)));
    }
    const checkPeople = () => setPeople(homeWorkReducer(initialPeople, checkPeopleAC(18)));

    return (
        <div>
            <hr/>
            homeworks 8

            <div className={s.body}>
                <div className={s.container}>{finalPeople}</div>

                <SuperButton onClick={() => chooseMethodOfSort('up')}>sort up</SuperButton>
                <SuperButton onClick={() => chooseMethodOfSort('down')}>sort down</SuperButton>
                <SuperButton onClick={checkPeople}>check 18</SuperButton>
            </div>

            <hr/>
            <hr/>
        </div>
    )
}

export default HW8
