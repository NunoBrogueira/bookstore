import React from 'react';

import './Sort.scss';

interface DispatchProps {
    handleSortBy: (option: string) => void;
}

const Sort: React.FC<DispatchProps> = ({
    handleSortBy
}) => {

    return (
        <select className="select"
            onChange={(event: any) => handleSortBy(event.target.value)}>
            <option value={'name'}>Books Name</option>
            <option value={'date'}>Publish Date</option>
            <option value={'author.name'}>Author Name</option>
        </select>
    )
}

export default (Sort);