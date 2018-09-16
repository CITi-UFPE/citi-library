import React from 'react'
import styles from './style.scss'

const Header = () => (
  <div>
    <h1 className={styles.header}>CITi's #library</h1>
    <p className={styles.intro}>
      Todos os aprendizados do CITi no #library em um só lugar.
    </p>
  </div>
)

export default Header
