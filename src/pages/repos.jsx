import React, { useContext } from 'react';

import Container from "../components/container";
import ReposContainer from "../components/reposContainer";

import { context } from '../context';

const Repos = props => {
    const ctx = useContext(context);

    return (
        <Container>
            <ReposContainer name="Leonardo Rocha" repos={ctx.userRepos} />
        </Container>
    );
}

export default Repos;