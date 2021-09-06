import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import {AlternativeSuperSelect} from "./common/c5-SuperSelect/AlternativeSuperSelect";
import {AlternativeSuperRadio} from "./common/c6-SuperRadio/AlternativeSuperRadio";


const arr = ['x', 'y', 'z']
export type arrAlternativeType = {
    id:string,
    title:string
}
const arrAlternative = [
    {id:'1', title: 'x'},
    {id:'2', title: 'y'},
    {id:'3', title: 'z'},
]
function HW7() {
    const [value, onChangeOption] = useState(arr[1])
    const [valueAlt, setValueAlt] = useState<string | null>('1')
    return (
        <div>
            <hr/>
            homeworks 7

            {/*should work (должно работать)*/}
            <div style={{paddingLeft:'30px'}}>
                <div>
                    <SuperSelect
                        options={arr}
                        value={value}
                        onChangeOption={onChangeOption}
                    />
                    <SuperRadio
                        name={'radio'}
                        options={arr}
                        value={value}
                        onChangeOption={onChangeOption}
                    />
                </div>
                <div>
                    <AlternativeSuperSelect
                        value={valueAlt}
                        tasks={arrAlternative}
                        setValue={setValueAlt}
                    />
                    <AlternativeSuperRadio
                        value={valueAlt}
                        tasks={arrAlternative}
                        setValue={setValueAlt}
                    />

                </div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at cumque deserunt dolor dolore inventore quasi repellat suscipit vel voluptates!
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperSelect/>*/}
            {/*<AlternativeSuperRadio/>*/}
            <hr/>
        </div>
    )
}

export default HW7
