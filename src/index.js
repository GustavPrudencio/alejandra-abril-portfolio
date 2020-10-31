import React from "react"
import ReactDOM from "react-dom"
import { Provider } from 'react-redux';

import App from './App'
import configureStore from "./state"

const store = configureStore();

const AppWithProviders = () => (
  <Provider store={store}>
    <App/>
  </Provider>
);

ReactDOM.render(<AppWithProviders />, document.getElementById("root"))
