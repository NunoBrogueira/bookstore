import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from '../../store';
import BookItem from './index';

describe('Render book item', (): void => {
    it('Renders without crashing', (): void => {
    const container = document.createElement('div');
    ReactDOM.render(
        <Provider store={store}>
            <BookItem book={name} openPopup={name} />
        </Provider>,
        container,
    );
    ReactDOM.unmountComponentAtNode(container);
});
});

