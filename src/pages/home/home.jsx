import React from 'react'

import Learning from 'components/learning'
import NotFoundMessage from 'components/not-found'
import Page from 'components/page'
import { connect } from 'react-redux'
import styles from './style.scss'

const Home = props => {
  const { library } = props
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

const mapStateToProps = state => ({
  library: state.library
})

export default connect(mapStateToProps)(Home)
