import React from 'react'
import { connect } from 'react-redux'
import styles from './style.scss'

const Contributor = ({ author: { avatar, username }, count }) => {
    return (
        <div className={styles.contributorContainer}>
            <div className={styles.author}>
                <img
                    className={styles.authorAvatar}
                    src={avatar}
                    alt={`Avatar de ${username}`}
                />
                {username}
            </div>
            <div className={styles.count}>{count} contribuiç{count === 1 ? 'ão' : 'ões'}</div>
        </div>
    );
}

const mapStateToProps = (state, { authorId }) => {
    const author = (
      state.authors.items && state.authors.items.length > 0 &&
      state.authors.items.find(i => i.id === authorId)
    )
    return { author: author ? author.data : {} }
}
  
export default connect(mapStateToProps)(Contributor)