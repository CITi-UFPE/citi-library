import React from 'react'

import { isEmpty, find, replace, deburr, get } from 'lodash'

import Learning from 'components/learning'
import { Link } from 'react-router-dom'
import Page from 'components/page'
import Title from 'components/title'
import { connect } from 'react-redux'
import emoji from 'react-easy-emoji'
import { urlfyAuthorUsername } from 'utils/helpers'
import styles from './style.scss'

const SingleAuthor = props => {
  const { items, author } = props
  if (isEmpty(author)) return null
  return (
    <Page>
      <Link to="/authors" className={styles.back}>
        {emoji('👈')}
      </Link>
      <Title>Filtrando por {!isEmpty(author) && get(author.data, 'username')}</Title>
      <div>
        {items.length ? (
          items.map(item => <Learning key={item.id} id={item.id} data={item.data} />)
        ) : (
          <div>Nenhum item encontrado.</div>
        )}
      </div>
    </Page>
  )
}

const mapStateToProps = (state, { match }) => {
  const { authors } = state
  const authorName = match.params.authorName
  const author =
    !!authors && find(authors.items, i => urlfyAuthorUsername(i.data.username) === authorName)
  const filteredItems =
    !!author &&
    !!state.library.items &&
    state.library.items.filter(i => i.data.authorId === get(author.data, 'id'))
  return { author: author, items: filteredItems, isLoading: state.isLoading }
}

export default connect(mapStateToProps)(SingleAuthor)
