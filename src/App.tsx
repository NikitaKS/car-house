import React, {FC} from 'react';
import Header from "./components/header/Header";
import Main from "./components/mainPage/MainContainer";
import Footer from "./components/footer/Footer";

const App: FC = () => {
    return (
        <>
            <Header/>
            <Main/>
            <Footer/>
        </>
    );
};

export default App;
