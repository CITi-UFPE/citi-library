import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'
import Page from 'components/page'
import Title from 'components/title'
import { connect } from 'react-redux'
import styles from './style.scss'

class Tags extends Component {
  render () {
    const { tags } = this.props
    return (
      <Page>
        <Title>Filtrar por tags</Title>
        <div className={styles.tagList}>
          {tags.length > 0 && tags.map(tag => (
            <NavLink key={tag} to={`/tag/${tag}`}>{tag}</NavLink>
          ))}
          <NavLink to={`/tag/sem-tag`}>Sem tags</NavLink>
        </div>
      </Page>
    )
  }
}

const mapStateToProps = state => ({
  tags: state.tags || []
})

export default connect(mapStateToProps)(Tags)
