import {characters, defaultHero} from "../utils/constants.ts";
import {useParams} from "react-router-dom";
import ErrorPage from "../components/ErrorPage.tsx";
import React, {useContext, useEffect} from "react";
import {SWContext} from "../utils/context.ts";

export const SwWrapper = (WrapComponent: React.ComponentType) => {
    return () => {
        const {heroId = defaultHero} = useParams();
        const {changeHero} = useContext(SWContext);

        useEffect(() => {
            if (!characters[heroId]) {
                return;
            }
            changeHero(heroId);
        }, [heroId])

        return characters[heroId] ? (
                <WrapComponent/>
            )
            :
            <ErrorPage/>
    }
};