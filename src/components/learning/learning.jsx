import React from 'react'
import ReactMarkdown from 'react-markdown'
import { UnixMoment } from 'components/moment'
import { connect } from 'react-redux'
import styles from './style.scss'

const Learning = ({ data, author }) => {
  const { content, timestamp, tags } = data
  return (
    <div className={styles.learningContainer}>
      <div className={styles.content}>
        <ReactMarkdown
          source={content}
          allowedTypes={['root', 'paragraph', 'inlineCode', 'link', 'strong', 'emphasis']}
        />
      </div>
      <div className={styles.meta}>
        <div className={styles.author}>
          <img
            className={styles.authorAvatar}
            src={author.avatar}
            alt={`Avatar de ${author.username}`}
          />
          {author.username} ― <UnixMoment>{timestamp}</UnixMoment>
        </div>
        <div className={styles.tags}>
          {tags && tags.split(',').map(tag => (
            <div className={styles.tag} key={tag}>{tag}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state, { data }) => {
  const author = (
    state.authors.items && state.authors.items.length > 0 &&
    state.authors.items.find(i => i.id === data.authorId)
  )
  return { author: author ? author.data : {} }
}

export default connect(mapStateToProps)(Learning)
