import React, { Component } from 'react'

import Contributor from 'components/contributor'
import NotFoundMessage from 'components/not-found'
import Page from 'components/page'
import { connect } from 'react-redux'

const MIN_COUNT = 2

class Leaderboard extends Component {
  groupContributors = contributions => {
    const { authors } = this.props
    const authorsLoaded = !!Object.keys(authors).length
    const contributors = contributions.reduce((collection, current) => {
      const { authorId } = current.data
      if (authorId in collection) collection[authorId]++
      else collection[authorId] = 1
      return collection
    }, {})

    return Object.keys(contributors)
      .map(author => {
        return { author, count: contributors[author] }
      })
      .sort((a, b) => b.count - a.count)
      .filter(author => {
        // author.author is the id
        const authorData = authorsLoaded && authors.items.find(a => a.id === author.author).data
        return author.count >= MIN_COUNT && (authorData && authorData.username !== 'vanessa')
      })
  }

  render() {
    const { library } = this.props
    return (
      <Page>
        <div>
          {library.items && library.items.length ? (
            this.groupContributors(library.items).map(({ author, count }) => (
              <Contributor key={author} authorId={author} count={count} />
            ))
          ) : (
            <NotFoundMessage />
          )}
        </div>
      </Page>
    )
  }
}

const mapStateToProps = state => ({
  library: state.library,
  authors: state.authors
})

export default connect(mapStateToProps)(Leaderboard)
