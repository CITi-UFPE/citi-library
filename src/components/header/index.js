import { NavLink } from 'react-router-dom'
import React from 'react'
import emoji from 'react-easy-emoji'
import styles from './style.scss'

const Header = () => (
  <div className={styles.header}>
    <h1 className={styles.title}>
      { emoji('CITi\'s #library 🐷') }
    </h1>
    <p className={styles.intro}>
      Todos os aprendizados do CITi no #library em um só lugar.
    </p>
    <nav>
      <NavLink to='/'>Início</NavLink>
      <NavLink to='/tags'>Tags</NavLink>
    </nav>
  </div>
)

export default Header
