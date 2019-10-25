import React from 'react'

import { NavLink } from 'react-router-dom'
import Page from 'components/page'
import Title from 'components/title'
import { connect } from 'react-redux'
import styles from './style.scss'

const Tags = props => {
  const { tags } = props
  return (
    <Page>
      <Title>Filtrar por tags</Title>
      <div className={styles.tagList}>
        {tags.length > 0 &&
          tags.sort().map(tag => (
            <NavLink className={styles.tag} key={tag} to={`/tag/${tag}`}>
              {tag}
            </NavLink>
          ))}
        <NavLink className={styles.noTag} to={`/tag/sem-tag`}>
          Sem tags
        </NavLink>
      </div>
    </Page>
  )
}

const mapStateToProps = state => ({
  tags: state.tags || []
})

export default connect(mapStateToProps)(Tags)
