import React, {useCallback, useState} from "react";
import s from "./HW12.module.css";
import {AlternativeSuperSelect} from "../h7/common/c5-SuperSelect/AlternativeSuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC, ThemeType} from "./bll/themeReducer";
import {Dispatch} from "redux";

function HW12() {
    const backgroundTheme = useSelector<AppStoreType, ThemeType>(state => state.theme.backgroundTheme)
    const themes = useSelector<AppStoreType, Array<ThemeType>>(state => state.theme.themes)

    const dispatch = useDispatch<Dispatch>();

    const setTheme = useCallback((id:string) => {
        const findTheme = themes.find(t => t.id === id);
        findTheme && dispatch(changeThemeAC(findTheme))
    },[dispatch, themes])

    return (
        <div className={s[backgroundTheme.title]}>
            <hr/>
            <span className={`${s[backgroundTheme.title + '-text']} ${s.title}`}>
                homeworks 12
            </span>

            <AlternativeSuperSelect
                value={backgroundTheme.id}
                tasks={themes}
                setValue={setTheme}
            />
            <hr/>
        </div>
    );
}

export default HW12;
