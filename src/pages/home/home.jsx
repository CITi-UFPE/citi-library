import React, { Component } from 'react'

import Learning from 'components/learning'
import Page from 'components/page'
import { connect } from 'react-redux'
import styles from './style.scss'

const NotFoundMessage = () => (
  <div className={styles.notFoundMessage}>
    <h4>Nenhum item encontrado.</h4>
    Que tal começar a usar o comando <code>/library</code> no Discord?
  </div>
)

class Home extends Component {
  render () {
    const { library } = this.props
    return (
      <Page>
        <div className={styles.libraryItems}>
          {library.items && library.items.length
            ? library.items.map(item => <Learning key={item.id} data={item.data} id={item.id} />)
            : <NotFoundMessage />}
        </div>
      </Page>
    )
  }
}

const mapStateToProps = state => ({
  library: state.library
})

export default connect(mapStateToProps)(Home)
