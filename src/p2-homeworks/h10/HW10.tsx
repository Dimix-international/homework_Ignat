import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW10.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {Dispatch} from "redux";
import {ActionType, loadingAC} from "./bll/loadingReducer";
function HW10() {
    let loading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    let dispatch = useDispatch<Dispatch<ActionType>>()

    const setLoading = () => {
        dispatch(loadingAC(true));
        setTimeout(()=>{
            dispatch(loadingAC(false));
        },3000)
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div className={s.loading}>
                        <img src="https://assets.materialup.com/uploads/b68f4460-aaa9-4e19-99d8-232dfea1c537/preview.gif" alt="loading"/>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
