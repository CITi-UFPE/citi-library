import React from 'react'
import styles from './style.scss'

const NotFoundMessage = () => (
  <div className={styles.notFoundMessage}>
    <h4>Nenhum item encontrado.</h4>
    Que tal começar a usar o comando <code>/library</code> no Discord?
  </div>
)

export default NotFoundMessage;
