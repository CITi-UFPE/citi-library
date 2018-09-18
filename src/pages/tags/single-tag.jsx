import React, { Component } from 'react'

import Learning from 'components/learning'
import Page from 'components/page'
import Title from 'components/title'
import { connect } from 'react-redux'

class SingleTag extends Component {
  render () {
    const { items, match } = this.props
    const tagName = match.params.tagName
    return (
      <Page>
        <Title>Filtrando por {tagName}</Title>
        <div>
          {items.length
            ? items.map(item => <Learning key={item.id} data={item.data} />)
            : <div>Nenhum item encontrado</div>}
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
