import React from 'react'
import { UnixMoment } from 'components/moment'
import styles from './style.scss'

const Learning = ({ data }) => {
  const { content, authorId, timestamp } = data
  return (
    <div className={styles.learningContainer}>
      <div className={styles.content}>{content}</div>
      <div className={styles.meta}>
        <div className={styles.author}>
          {authorId}
        </div>
        <div className={styles.timestamp}>
          <UnixMoment>{timestamp}</UnixMoment>
        </div>
      </div>
    </div>
  )
}

export default Learning
