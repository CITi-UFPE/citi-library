import { startLoading, stopLoading } from 'actions/loading'

import Api from 'utils/api'

export const RECEIVED_LIBRARY = 'RECEIVED_LIBRARY'
export const LIBRARY_FETCHING_FAILED = 'LIBRARY_FETCHING_FAILED'

export const receivedLibrary = items => ({ type: RECEIVED_LIBRARY, items })
export const libraryFetchingFailed = error => ({ type: LIBRARY_FETCHING_FAILED, error })
export const getLibrary = () => dispatch => {
  dispatch(startLoading())
  Api.getLibrary()
    .then(data => {
      dispatch(receivedLibrary(data))
      dispatch(stopLoading())
    })
    .catch(error => {
      dispatch(libraryFetchingFailed(error))
      dispatch(stopLoading())
    })
}
