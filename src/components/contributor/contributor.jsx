import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import styles from './style.scss'

class Contributor extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasAvatar: true }
    this.avatarImg = React.createRef()
  }

  setHasAvatar(hasAvatar) {
    this.setState({ hasAvatar })
  }

  componentDidMount() {
    this.avatarImg.current.onerror = () => this.setHasAvatar(false)
  }

  render() {
    const {
      author: { avatar, username },
      count
    } = this.props
    const { hasAvatar } = this.state

    return (
      <div className={styles.contributorContainer}>
        <div className={styles.author}>
          {hasAvatar ? (
            <img
              ref={this.avatarImg}
              className={styles.authorAvatar}
              src={avatar}
              alt={`Avatar de ${username}`}
            />
          ) : (
            <div className={styles.defaultAvatar} alt={`Avatar de ${username}`}>
              ?
            </div>
          )}
          {username}
        </div>
        <div className={styles.count}>
          {count} contribuiç{count === 1 ? 'ão' : 'ões'}
        </div>
      </div>
    )
  }
}

Contributor.propTypes = {
  author: PropTypes.object,
  count: PropTypes.number
}

const mapStateToProps = (state, { authorId }) => {
  const { authors } = state
  const author =
    authors.items && authors.items.length > 0 && authors.items.find(i => i.id === authorId)
  return { author: author ? author.data : {} }
}

export default connect(mapStateToProps)(Contributor)
