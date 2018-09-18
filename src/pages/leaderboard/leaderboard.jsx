import React, { Component } from 'react'

import { IoIosConstruct } from 'react-icons/io'
import Page from 'components/page'
import emoji from 'react-easy-emoji'
import styles from './style.scss'

export default class Leaderboard extends Component {
  render () {
    return (
      <Page>
        <div className={styles.icon}>
          <IoIosConstruct />
        </div>
        <div className={styles.text}>
          <h3>Em construção!</h3>
          {emoji('Quer ajudar? Contribua com o repositório 😊')}
        </div>
      </Page>
    )
  }
}
