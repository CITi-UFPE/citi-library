import { Library } from 'actions/library'

const LibraryReducer = (library = {}, action) => {
  switch (action.type) {
    case Library.RECEIVED_LIBRARY:
      return {
        ...library,
        items: [...action.items],
        error: null
      }
    case Library.LIBRARY_FETCHING_FAILED:
      return {
        ...library,
        error: action.error
      }
    default:
      return { ...library }
  }
}

export default LibraryReducer
