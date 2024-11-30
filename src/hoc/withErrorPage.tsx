import {characters, defaultHero} from "../utils/constants.ts";
import {useParams} from "react-router-dom";
import ErrorPage from "../components/ErrorPage.tsx";
import React, {useContext, useEffect} from "react";
import {SWContext} from "../utils/context.ts";

export const SwWrapper = <T extends object> (WrapComponent: React.ComponentType<T>) => (props: T) => {

        const {heroId = defaultHero} = useParams();
        const {changeHero, setErrorMessage} = useContext(SWContext);

        useEffect(() => {
            if (!characters[heroId]) {
                setErrorMessage('Hero not found!');
                return;
            }
            setErrorMessage('');
            changeHero(heroId);
        }, [heroId, changeHero, setErrorMessage])

        return characters[heroId] ? <WrapComponent  {...props} heroId = {heroId}/> : <ErrorPage/>;
    }
