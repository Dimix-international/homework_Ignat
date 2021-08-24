import React, {ChangeEvent,KeyboardEvent, useState} from 'react'
import SuperInputText from './common/c1-SuperInputText/SuperInputText'
import s from './HW4.module.css'
import SuperButton from './common/c2-SuperButton/SuperButton'
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox'

function HW4() {
    const [text, setText] = useState<string>('')
    const error = text.trim() ? '' : 'error'

    const changeTitle = (e:ChangeEvent<HTMLInputElement>) => setText(e.currentTarget.value);
    const addTitle = (e:KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && showAlert();


    const showAlert = () => {
        if (error) {
            alert('введите текст...')
        } else {
            alert(text.trim()) // если нет ошибки показать текст
            setText('');
        }
    }

    const [checked, setChecked] = useState<boolean>(false)
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)

    return (
        <div>
            <hr/>
            homeworks 4

            <div className={s.column}>
                <SuperInputText
                    value={text}
                    onChangeText={setText}
                    onEnter={showAlert}
                    error={error}
                    spanClassName={s.testSpanError}
                />

                <SuperInputText
                    value={text}
                    className={s.blue} // проверьте, рабоет ли смешивание классов
                    error={error}
                    spanClassName={s.testSpanError}
                    onKeyPress={addTitle}
                    onChange = {changeTitle}
                />

                {/*----------------------------------------------------*/}

                <SuperButton
                    className={s.button}
                >
                    default
                </SuperButton>

                <SuperButton
                    red // пропсу с булевым значением не обязательно указывать true
                    onClick={showAlert}
                    className={s.button}
                >
                    delete {/*// название кнопки попадёт в children*/}
                </SuperButton>

                <SuperButton
                    className={s.button}
                    disabled>
                    disabled
                </SuperButton>

                {/*----------------------------------------------------*/}

                <SuperCheckbox
                    checked={checked}
                    onChangeChecked={setChecked}
                >
                  some text{/*// этот текст попадёт в children*/}
                </SuperCheckbox>

                {/*// onChange тоже должен работать*/}
                <SuperCheckbox
                    checked={checked}
                    onChange={testOnChange}/>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperInputText/>*/}
            {/*<AlternativeSuperButton/>*/}
            {/*<AlternativeSuperCheckbox/>*/}
            <hr/>
        </div>
    )
}

export default HW4
