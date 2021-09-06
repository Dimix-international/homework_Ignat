import React, {ChangeEvent, useEffect, useState} from 'react'
import s from './AlternativeSuperRadio.module.css'
import {arrAlternativeType} from "../../HW7";

type AlternativeSuperRadioType = {
    value:any
    tasks: arrAlternativeType[]
    setValue:(id:string) => void
}
export const AlternativeSuperRadio:React.FC<AlternativeSuperRadioType> = React.memo( (
    {
        value,
        tasks,
        setValue
    }
) => {
    const[active, setActive]= useState(value);

    useEffect(() => {
        setActive(value)
    },[value]);
    return (
        <div className={s.container}>
            {
                tasks.map(t => {
                    const onChangeHandler =() => {
                        setValue(t.id)
                    }
                    return (
                        <label
                            key={t.id}>
                            <input
                                className={s.radio}
                                type="radio"
                                checked={t.id === active}
                                onChange={onChangeHandler}
                            />
                            <span
                                className={t.id === active ? `${s.text} ${s.active}` : s.text}>{t.title}
                            </span>
                        </label>
                    )
                })
            }
        </div>

    )
})


