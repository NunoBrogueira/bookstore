import React, { ReactNode } from 'react';

import './Popup.scss';
import { ReactComponent as Cross } from '../../assets/cross.svg';
import { Books } from '../../store/ducks/books/types';

interface StateProps {
    children: ReactNode;
}

interface DispatchProps {
    closePopup: (isOpen: boolean, book?: Books) => void;
}

type Props = StateProps & DispatchProps;

const Popup: React.FC<Props> = ({
    children,
    closePopup
}) => {

    return (
        <div id="pop-up">
            <div className="pop-up-content">
                <div className="close">
                    <Cross onClick={() => closePopup(false)} />
                </div>
                <React.Fragment>
                    {children}
                </React.Fragment>
            </div>
        </div>
    )
}

export default (Popup);