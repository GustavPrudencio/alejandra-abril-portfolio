import React from "react"
import AppRoutes from "./Router"
import "./components/@vuexy/rippleButton/RippleButton"

import "react-perfect-scrollbar/dist/css/styles.css"
import "prismjs/themes/prism-tomorrow.css"
import 'views/styles/styles.css';

import { Router, Switch, Route } from "react-router-dom"
import { history } from "./history"

const App = props => {
  return (
    <Router history={history}>
        <AppRoutes/>
    </Router>

  )
}

export default App
