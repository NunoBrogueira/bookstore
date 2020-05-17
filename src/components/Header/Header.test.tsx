import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from '../../store';
import Header from './index';

describe('Render Header item', (): void => {
    it('Renders without crashing', (): void => {
    const container = document.createElement('div');
    ReactDOM.render(
        <Provider store={store}>
            <Header handleSidebar={name} />
        </Provider>,
        container,
    );
    ReactDOM.unmountComponentAtNode(container);
});
});

