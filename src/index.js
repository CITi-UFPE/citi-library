import { Provider, connect } from 'react-redux'
import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Tags, { SingleTag } from 'pages/tags'

import Footer from 'components/footer'
import Header from 'components/header'
import Home from 'pages/home'
import Leaderboard from 'pages/leaderboard'
import LearningPage from 'pages/learning'
import ReactDOM from 'react-dom'
import { bindActionCreators } from 'redux'
import { getAuthors } from 'actions/authors'
import { getLibrary } from 'actions/library'
import registerServiceWorker from './registerServiceWorker'
import store from 'store'
import styles from 'styles/main.scss'

class App extends Component {
  componentDidMount () {
    this.props.getLibrary()
    this.props.getAuthors()
  }

  render () {
    const { store } = this.props
    return (
      <Router>
        <Provider store={store}>
          <div className={styles.body}>
            <div className={styles.container}>
              <Header />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/tags' component={Tags} />
                <Route exact path='/tag/:tagName' component={SingleTag} />
                <Route exact path='/learning/:learningId' component={LearningPage} />
                <Route exact path='/leaderboards' component={Leaderboard} />
                <Route render={() => <div>Página não encontrada</div>} />
              </Switch>
              <Footer />
            </div>
          </div>
        </Provider>
      </Router>
    )
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({ getLibrary, getAuthors }, dispatch)
)

const ConnectedApp = connect(null, mapDispatchToProps)(App)

ReactDOM.render(
  <ConnectedApp store={store} />,
  document.getElementById('root')
)

registerServiceWorker()
