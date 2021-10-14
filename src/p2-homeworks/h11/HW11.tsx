import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(20)
    const [value2, setValue2] = useState(80)

    const onChangeValue = (value: [number, number]) => {
        setValue1(value[0]);
        setValue2(value[1])
    }
    const minDistance = 10;
    const step = 1;
    const min = 0;
    const max= 100;

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    value={value1}
                    onChangeRange={setValue1}
                    disableValue={value2}
                    minDistance={minDistance}
                />
            </div>

            <div>
                <SuperDoubleRange
                    value={[value1,value2]}
                    onChangeRange={onChangeValue}
                    minDistance={minDistance}
                    step={step}
                    min={min}
                    max={max}
                />
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
