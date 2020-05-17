import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from '../../store';
import Sort from './index';

describe('Render Sort item', (): void => {
    it('Renders without crashing', (): void => {
    const container = document.createElement('div');
    ReactDOM.render(
        <Provider store={store}>
            <Sort handleSortBy={name} />
        </Provider>,
        container,
    );
    ReactDOM.unmountComponentAtNode(container);
});
});

