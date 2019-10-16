import React from 'react'

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

const mapStateToProps = (state, { authorId }) => {
  const author =
    state.authors.items &&
    state.authors.items.length > 0 &&
    state.authors.items.find(i => i.id === authorId)
  return { author: author ? author.data : {} }
}

export default connect(mapStateToProps)(Contributor)
