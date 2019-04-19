import React, { Component } from 'react'

import Contributor from 'components/contributor'
import NotFoundMessage from 'components/not-found'
import Page from 'components/page'
import { connect } from 'react-redux'

const MIN_COUNT = 2

class Leaderboard extends Component {
  groupContributors = (contributions) => {
    const contributors = contributions.reduce((collection, current) => {
      const { authorId } = current.data
      if (authorId in collection) collection[authorId]++
      else collection[authorId] = 1
      return collection
    }, {})

    return Object.keys(contributors)
      .map((author) => {
        return { author, count: contributors[author] }
      })
      .sort((a, b) => b.count - a.count)
      .filter(author => author.count >= MIN_COUNT)
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

const mapStateToProps = (state) => ({
  library: state.library
})

export default connect(mapStateToProps)(Leaderboard)
