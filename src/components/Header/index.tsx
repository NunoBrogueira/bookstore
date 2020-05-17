import React from 'react';

import './Header.scss';
import { ReactComponent as Hamburguer } from '../../assets/hamburguer.svg';

interface OwnProps {
    handleSidebar: (isOpen: boolean) => void;
}

type Props = OwnProps;

const Header: React.FC<Props> = ({
    handleSidebar
}) => {

    return (
        <div id="header">
            <div className="header-mobile">
                <Hamburguer onClick={() => handleSidebar(true)} />
            </div>
        </div>
    )
};

export default (Header);