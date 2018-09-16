import { Route, BrowserRouter as Router } from 'react-router-dom'

import Home from 'pages/home'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import store from 'store'

const App = () => (
  <Router>
    <Provider store={store}>
      <div>
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
