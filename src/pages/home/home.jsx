import React, { Component } from 'react'

import Learning from 'components/learning'
import Page from 'components/page'
import { connect } from 'react-redux'
import styles from './style.scss'

class Home extends Component {
  render () {
    const { library } = this.props
    return (
      <Page>
        <div className={styles.libraryItems}>
          {library.items && library.items.length
            ? library.items.map(item => <Learning key={item.id} data={item.data} />)
            : <div>Nenhum item encontrado. Que tal começar a usar o comando <code>/library</code>?</div>}
        </div>
      </Page>
    )
  }
}

const mapStateToProps = state => ({
  library: state.library
})

export default connect(mapStateToProps)(Home)
