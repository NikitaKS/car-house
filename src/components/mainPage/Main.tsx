import React, {FC} from 'react';
import SearchComponent from "./searchComponent/searchComponent";
import StepsComponent from "./stepsComponent/StepsComponent";

const Main: FC = React.memo(() => {
    return (
        <>
            <SearchComponent/>
            <StepsComponent/>
        </>
    );
});

export default Main;
