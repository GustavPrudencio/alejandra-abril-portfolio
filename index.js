import React, { Suspense, lazy } from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { ConnectedRouter } from 'react-router-redux';
import * as serviceWorker from "./serviceWorker"
// redux
import {register as registerServiceWorker} from './serviceWorker';
import configureStore from "./state"
// components
import { Layout } from "./utility/context/Layout"
import Spinner from "./components/@vuexy/spinner/Fallback-spinner"
// configs
import { initAuth } from './state/auth';
// styles
import "./index.scss"
import "./@fake-db"


const rootElement = document.getElementById('root');
const LazyApp = lazy(() => import("./App"))
 

const store = configureStore();

function renderApp(App) {
  ReactDOM.render(
    <Provider store={store}>
      <Suspense fallback={<Spinner />}>
        <Layout>
            <App />
        </Layout>
      </Suspense>
    </Provider>,
    rootElement
  );
}



if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp(require('./App').default);
  })
}

registerServiceWorker();


initAuth(store.dispatch)
  .then(() => renderApp(LazyApp))
  .catch(error => console.error(error));





  