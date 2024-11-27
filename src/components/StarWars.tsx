import {starWarsInfo} from "../utils/constants.ts";

import {SwWrapper} from "../hoc/withErrorPage.tsx";

const StarWars = () => {

    return (
            <div className={'text-[2em] text-justify tracking-[.2em] leading-normal'}>
                {starWarsInfo}
            </div>
        )
};

export default SwWrapper(StarWars);