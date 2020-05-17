import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import store from "./store";
import Main from "./views/Main";

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Main />
			</BrowserRouter>
	  	</Provider>
  	);
};

export default App;