import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import store from "./store";

describe("Render application", (): void => {
  	it("Renders without crashing", (): void => {
		const container = document.createElement("div");
		ReactDOM.render(
			<Provider store={store}>
				<App />
			</Provider>,
			container
		);
		ReactDOM.unmountComponentAtNode(container);
	});
});
