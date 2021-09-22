import React, {useEffect, useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)
    let[play,setPlay] = useState((false));

    let sec = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();


    let classSeconds = `${s.block}`;
    let valueSeconds = `${s.number}`;


    let classMinute= `${s.block}`;
    let valueMinute =`${s.number}`;

    let classHours= `${s.block}`;
    let valueHours=`${s.number}`;

    const stop = () => {
        clearInterval(timerId);
        setPlay(false)
    }

    if(play) {
        classSeconds = `${s.block} ${s.ceil} ${s.play}`;
        valueSeconds = `${s.number} ${s.value_ceil} ${s.play}`;
    }
    if(sec === 0 ){
        classMinute= `${s.block} ${s.ceil} ${s.play}`;
        valueMinute =`${s.number} ${s.value_ceil} ${s.play}`;
    }
    if(minutes === 0 && sec === 0 ){
        classHours= `${s.block} ${s.ceil} ${s.play}`;
        valueHours =`${s.number} ${s.value_ceil} ${s.play}`;
    }

    const start = () => {
        stop();
        setPlay(true)
        const id: number = window.setInterval(() => {
            setDate(new Date());
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }
    const finalTime = (value: number) => {
        let valueString = String(value);
        if(valueString.length < 2) {
            valueString = `0${value}`
        }
        return valueString
    }
    // const stringTime = `${finalTime(date.getHours())} : ${finalTime(date.getMinutes())} : ${finalTime(date.getSeconds())}`
    const stringDate = date.toLocaleDateString();
    return (
        <div>
            homeworks 9 - clock
            <div className={s.container}>
                <div
                    className={s.clock}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    {/*{stringTime}*/}
                    <div className={classHours}><span className={valueHours}>{finalTime(hours)}</span></div>
                    <div className={classMinute}><span className={valueMinute}>{finalTime(minutes)}</span></div>
                    <div className={classSeconds}><span className={valueSeconds}>{finalTime(sec)}</span></div>
                </div>

                {show && (
                    <div className={s.date}>
                        {stringDate}
                    </div>
                )}

                <div>
                    <SuperButton className={s.btn} onClick={start}>start</SuperButton>
                    <SuperButton className={s.btn} onClick={stop}>stop</SuperButton>
                </div>

            </div>
        </div>
    )
}

export default Clock
