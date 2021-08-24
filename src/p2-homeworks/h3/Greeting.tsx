import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    addUserWhenPressEnter:(event:KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers,addUserWhenPressEnter} // деструктуризация пропсов
) => {

    const inputClass = error ? `${s.input} ${s.error}` : s.input;

    const disabledButton = !Boolean(name);
    const buttonClass = disabledButton ? `${s.button} ${s.disabled}` : s.button;

    let valueOfButton = Boolean(name) ? 'add' : '';

    return (
        <div className={s.wrapper}>
            <div className={s.block}>
                <input
                    value={name}
                    onChange={setNameCallback}
                    className={inputClass}
                    onKeyPress={addUserWhenPressEnter}
                />
                <button
                    onClick={addUser}
                    className={buttonClass}
                    disabled={disabledButton}
                >{valueOfButton}</button>
                <span>{totalUsers}</span>
            </div>
            <span className={s.error__message}>{error}</span>
        </div>
    )
}

export default Greeting
