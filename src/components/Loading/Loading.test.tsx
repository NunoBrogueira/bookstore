import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import Loading from './index';

describe('Render Loading item', (): void => {
    it('Renders without crashing', (): void => {
    const container = document.createElement('div');
    ReactDOM.render(
        <Provider store={store}>
            <Loading />
        </Provider>,
        container,
    );
    ReactDOM.unmountComponentAtNode(container);
});
});

