import React, {FC} from 'react';
import './Main.less';
import {Route} from 'react-router-dom';
import Main from "./Main";
import RequestPage from "../ReauestPage/RequestPage";

const MainContainer: FC = React.memo(() => {
    return (
        <main id="content">
            <Route exact path={'/'} render={() => <Main/>}/>
            <Route path={'/request'} render={() => <RequestPage/>}/>
        </main>
    );
});

export default MainContainer;
