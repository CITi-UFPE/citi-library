import { Route, BrowserRouter as Router } from 'react-router-dom'

import Header from 'components/header'
import Home from 'pages/home'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import store from 'store'
import styles from 'styles/main.scss'

const App = () => (
  <Router>
    <Provider store={store}>
      <div className={styles.body}>
        <Header />
        <Route exact path='/' component={Home} />
      </div>
    </Provider>
  </Router>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
registerServiceWorker()
