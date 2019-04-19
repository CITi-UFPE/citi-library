import { NavLink } from 'react-router-dom'
import React from 'react'

import styles from './style.scss'

const Header = () => (
  <div className={styles.header}>
    <nav className={styles.navbar}>
      <NavLink activeClassName={styles.active} exact to="/">
        Início
      </NavLink>
      <NavLink activeClassName={styles.active} to="/tags">
        Tags
      </NavLink>
      <NavLink activeClassName={styles.active} to="/leaderboards">
        Leaderboards
      </NavLink>
    </nav>
    <div className={styles.title}>
      <span role="img" aria-label="Título">📗🐷</span>
    </div>
    <p className={styles.intro}>
      Todos os aprendizados do CITi no <a href="https://discord.gg/XMMrkVJ">#library</a> em um só
      lugar.
    </p>
  </div>
)

export default Header
