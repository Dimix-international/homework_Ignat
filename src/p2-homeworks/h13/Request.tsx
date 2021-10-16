import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from './Request.module.css'
import {useState, MouseEvent} from "react";
import {requestAPI, ResponsePostType} from "./RequestAPI";
import {AxiosResponse} from "axios";

enum NAME_REQUESTS {
    SEND = 'SEND',
    GET = 'GET',
}

type UserType = {
    email: string,
    name: string,
    id: string,
}
export const Request = () => {
    const [checked, setChecked] = useState(false);
    const [answer, setAnswer] = useState('');
    const [users, setUsers] = useState<Array<UserType>>([]);
    const [toggleAnswer, setToggleAnswer] = useState(false)

    const makeRequest = async (e: MouseEvent<HTMLButtonElement>) => {
        setAnswer('');
        if (e.currentTarget.dataset) {
            switch (e.currentTarget.dataset.name) {
                case NAME_REQUESTS.SEND:
                    setToggleAnswer(true);
                    try {
                        const data = await requestAPI.post(checked);
                        return setAnswer(data.data.errorText);
                    } catch (error) {
                        return setAnswer((error.response as AxiosResponse<ResponsePostType>).data.errorText)
                    }
                case NAME_REQUESTS.GET:
                    setToggleAnswer(false);
                    try {
                        const data = await requestAPI.get();
                        console.log(data.data.users);
                        return setUsers(data.data.users.map(u => {
                            return {
                                email: u.email,
                                name: u.name,
                                id: u._id
                            }
                        }))
                    } catch (error) {
                        alert(error.message)
                        break
                    }
                default:
                    setAnswer(answer)
            }
        }
    }

    return (
        <div style={{padding: '0 20px'}}>
            <SuperCheckbox
                checked={checked}
                onChangeChecked={setChecked}
            />
            <SuperButton
                className={s.btn}
                onClick={makeRequest}
                data-name={NAME_REQUESTS.SEND}
            >
                Send request
            </SuperButton>
            <SuperButton
                className={s.btn}
                onClick={makeRequest}
                data-name={NAME_REQUESTS.GET}
            >
                Get data
            </SuperButton>
            <div>
                {toggleAnswer ? answer
                : users.map(u => {
                    return (
                        <div key={u.id}>
                            <span style={{fontWeight:'bold'}}>{u.name}</span>
                            <span style={{margin:'0 5px'}}>-</span>
                            <span style={{fontStyle:'italic'}}>{u.email}</span>
                        </div>
                    )
                    })}
            </div>
        </div>
    )
}