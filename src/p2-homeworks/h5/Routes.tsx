import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import Junior from "./pages/Junior";
import Junior_plus from "./pages/Junior_plus";



export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus'
}

function Routes() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Switch>

                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
                <Route path={'/'} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>

                <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>
                <Route path={PATH.JUNIOR} render={() => <Junior />}/>
                <Route path={PATH.JUNIOR_PLUS} render={() => <Junior_plus />}/>
                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route path={'*'} render={() => <Error404 />}/>

            </Switch>
        </div>
    )
}

export default Routes
