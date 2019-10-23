import React, { Component } from 'react'

import { map, isEmpty } from 'lodash'

import { NavLink } from 'react-router-dom'
import Page from 'components/page'
import Title from 'components/title'
import { connect } from 'react-redux'
import styles from './style.scss'

const Authors = props => {
  const { authors } = props
  return (
    <Page>
      <Title>Filtrar por autores</Title>
      <div className={styles.tagList}>
        {!isEmpty(authors) &&
          map(authors, author => (
            <div className={styles.tag} key={author.id}>
              {author.data.username}
            </div>
          ))}
      </div>
    </Page>
  )
}

const mapStateToProps = state => ({
  authors: state.authors.items || []
})

export default connect(mapStateToProps)(Authors)
