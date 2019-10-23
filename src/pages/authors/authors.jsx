import React from 'react'

import { map, isEmpty } from 'lodash'

import { NavLink } from 'react-router-dom'
import Page from 'components/page'
import Title from 'components/title'
import { connect } from 'react-redux'
import { urlfyAuthorUsername } from 'utils/helpers'
import styles from './style.scss'

const Authors = props => {
  const { authors } = props
  return (
    <Page>
      <Title>Filtrar por autores</Title>
      <div className={styles.authorList}>
        {!isEmpty(authors) &&
          map(authors, author => (
            <NavLink
              className={styles.author}
              key={author.id}
              to={`/author/${urlfyAuthorUsername(author.data.username)}`}
            >
              {author.data.username}
            </NavLink>
          ))}
      </div>
    </Page>
  )
}

const mapStateToProps = state => ({
  authors: state.authors.items || []
})

export default connect(mapStateToProps)(Authors)
