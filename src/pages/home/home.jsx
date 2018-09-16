import React, { Component } from 'react'

import styles from './style.scss'

class Home extends Component {
  render () {
    return (
      <div className={styles.homeContainer}>
        <h1 className={styles.header}>CITi's #library</h1>
        <p className={styles.intro}>
          Todos os aprendizados do CITi no #library em um só lugar.
        </p>
      </div>
    )
  }
}

export default Home
