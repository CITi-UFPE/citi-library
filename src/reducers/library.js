import {
  LIBRARY_FETCHING_FAILED,
  RECEIVED_LIBRARY
} from 'actions/library'

const LibraryReducer = (library = {}, action) => {
  switch (action.type) {
    case RECEIVED_LIBRARY:
      return {
        ...library,
        items: [...action.items],
        error: null
      }
    case LIBRARY_FETCHING_FAILED:
      return {
        ...library,
        error: action.error
      }
    default:
      return { ...library }
  }
}

export default LibraryReducer
