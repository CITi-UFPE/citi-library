import { Link } from 'react-router-dom'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { UnixMoment } from 'components/moment'
import { connect } from 'react-redux'
import styles from './style.scss'

const Learning = ({ data, author, id }) => {
  const { content, timestamp, tags } = data
  return (
    <div className={styles.learningContainer}>
      <div className={styles.content}>
        <ReactMarkdown
          source={content}
          allowedTypes={['root', 'paragraph', 'inlineCode', 'link', 'code', 'strong', 'emphasis']}
        />
      </div>
      <div className={styles.meta}>
        <div className={styles.author}>
          <img
            className={styles.authorAvatar}
            src={author.avatar}
            alt={`Avatar de ${author.username}`}
          />
          {author.username}
          &nbsp;―&nbsp;
          <Link to={`learning/${id}/`}>
            <UnixMoment>{timestamp}</UnixMoment>
          </Link>
        </div>
        {tags
          ? <div className={styles.tags}>
            {tags && tags.split(',').map(tag => (
              <Link to={`tag/${tag}/`} className={styles.tag} key={tag}>{tag}</Link>
            ))}
          </div>
          : <div className={styles.noTag}>Nenhuma tag</div>
        }
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
