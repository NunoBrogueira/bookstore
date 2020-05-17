import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from '../../store';
import BookDetails from './index';

describe('Render book item', (): void => {
    it('Renders without crashing', (): void => {
    const container = document.createElement('div');
    ReactDOM.render(
        <Provider store={store}>
            <BookDetails book={name} loading={false} />
        </Provider>,
        container,
    );
    ReactDOM.unmountComponentAtNode(container);
});
});

