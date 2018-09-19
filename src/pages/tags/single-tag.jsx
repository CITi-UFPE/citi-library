import React, { Component } from 'react'

import Learning from 'components/learning'
import { Link } from 'react-router-dom'
import Page from 'components/page'
import Title from 'components/title'
import { connect } from 'react-redux'
import emoji from 'react-easy-emoji'
import styles from './style.scss'

class SingleTag extends Component {
  render () {
    const { items, match } = this.props
    const tagName = match.params.tagName
    return (
      <Page>
        <Link to='/tags' className={styles.back}>{ emoji('👈') }</Link>
        <Title>Filtrando por {tagName === 'sem-tag' ? 'itens sem tag' : tagName}</Title>
        <div>
          {items.length
            ? items.map(item => <Learning key={item.id} id={item.id} data={item.data} />)
            : <div>Nenhum item encontrado.</div>}
        </div>
      </Page>
    )
  }
}

const mapStateToProps = (state, { match }) => {
  const tagName = match.params.tagName
  const itemsWithoutTag = (
    !!state.library.items &&
    state.library.items.filter(i => i.data.tags === '')
  )
  const filteredItems = (
    !!state.library.items &&
    state.library.items.filter(i => i.data.tags.includes(tagName))
  )
  const parsedItems = (
    tagName === 'sem-tag'
      ? itemsWithoutTag
      : filteredItems
  )
  return { items: parsedItems, isLoading: state.isLoading }
}

export default connect(mapStateToProps)(SingleTag)
