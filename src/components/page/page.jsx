import React from 'react'

import Spinner from 'components/spinner'
import { connect } from 'react-redux'
import styles from './style.scss'

const Page = props => {
  const { children, isLoading } = props
  return <div className={styles.page}>{isLoading ? <Spinner /> : children}</div>
}

const mapStateToProps = state => ({
  isLoading: state.isLoading
})

export default connect(mapStateToProps)(Page)
