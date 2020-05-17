import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "../../store";
import BookList from "./index";

describe("Render book list", (): void => {
  it("Renders without crashing", (): void => {
    const container = document.createElement("div");
    ReactDOM.render(
      <Provider store={store}>
        <BookList books={name} loading={false} title="Testing" openBookPopup={name} />
      </Provider>,
      container
    );
    ReactDOM.unmountComponentAtNode(container);
  });
});
