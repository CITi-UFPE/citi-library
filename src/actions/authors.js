import { startLoading, stopLoading } from 'actions/loading'

import Api from 'utils/api'

export const Authors = {
  AUTHORS_RECEIVED: 'AUTHORS_RECEIVED',
  AUTHORS_FAILED: 'AUTHORS_FAILED'
}

export const authorsReceived = items => ({
  type: Authors.AUTHORS_RECEIVED, items
})
export const authorsFailed = error => ({
  type: Authors.AUTHORS_FAILED, error
})
export const getAuthors = () => dispatch => {
  dispatch(startLoading())
  Api.getAuthors()
    .then(data => dispatch(authorsReceived(data)))
    .catch(error => dispatch(authorsFailed(error)))
    .then(() => dispatch(stopLoading()))
}
