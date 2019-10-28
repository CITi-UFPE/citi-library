import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Learning from 'components/learning'
import NotFoundMessage from 'components/not-found'
import Page from 'components/page'
import { connect } from 'react-redux'
import styles from './style.scss'

class Home extends Component {
  render() {
    const { library } = this.props
    return (
      <Page>
        <div className={styles.libraryItems}>
          {library.items && library.items.length ? (
            library.items.map(item => <Learning key={item.id} data={item.data} id={item.id} />)
          ) : (
            <NotFoundMessage />
          )}
        </div>
      </Page>
    )
  }
}

Home.propTypes = {
  library: PropTypes.object
}

const mapStateToProps = state => ({
  library: state.library
})

export default connect(mapStateToProps)(Home)
