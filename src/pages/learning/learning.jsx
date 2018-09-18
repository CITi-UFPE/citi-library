import React, { Component } from 'react'

import Learning from 'components/learning'
import Page from 'components/page'
import Title from 'components/title'
import { connect } from 'react-redux'

class LearningPage extends Component {
  render () {
    const { learning, author } = this.props
    return (
      <Page>
        {!!author && <Title>Aprendizado de {author.username}</Title>}
        {!!learning && <Learning data={learning.data} id={learning.id} />}
      </Page>
    )
  }
}

const mapStateToProps = (state, { match }) => {
  const id = match.params.learningId
  const learning = (
    !!state.library.items &&
    state.library.items.find(i => i.id === id)
  )
  const author = (
    !!state.authors.items &&
    state.authors.items.find(a => a.id === learning.data.authorId)
  )
  return { learning, author: author.data }
}

export default connect(mapStateToProps)(LearningPage)
