import React, { Component } from 'react'

import Learning from 'components/learning'
import Page from 'components/page'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getLibrary } from 'actions/library'
import styles from './style.scss'

class Home extends Component {
  componentDidMount () {
    this.props.getLibrary()
  }

  render () {
    const { library } = this.props
    return (
      <Page>
        <div className={styles.libraryItems}>
          {library.items && library.items.map(item => <Learning key={item.id} data={item.data} />)}
        </div>
      </Page>
    )
  }
}

const mapStateToProps = state => ({
  library: state.library
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({ getLibrary }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
