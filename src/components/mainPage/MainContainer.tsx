import React, {FC} from 'react';
import './Main.less';
import {Route} from 'react-router-dom';
import Main from "./Main";
import RequestPage from "../requestPage/RequestPage";
import RegisterCompany from "../registerPage/registerCompany";

const MainContainer: FC = React.memo(() => {
    return (
        <main id="content">
            <Route exact path={'/'} render={() => <Main/>}/>
            <Route path={'/request'} render={() => <RequestPage/>}/>
            <Route path={'/register'} render={() => <RegisterCompany/>}/>
        </main>
    );
});

export default MainContainer;
