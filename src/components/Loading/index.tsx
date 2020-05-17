import React from 'react';

import { Spinner } from 'reactstrap';

interface OwnProps {}

const Loading: React.FC<OwnProps> = () => {

    return (
        <Spinner color="primary" />
    )
};

export default (Loading);