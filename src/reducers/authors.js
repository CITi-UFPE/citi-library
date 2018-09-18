import { Authors } from 'actions/authors'

const AuthorsReducer = (authors = {}, action) => {
  switch (action.type) {
    case Authors.AUTHORS_RECEIVED:
      return {
        ...authors,
        items: [...action.items],
        error: null
      }
    case Authors.AUTHORS_FAILED:
      return {
        ...authors,
        error: action.error
      }
    default:
      return { ...authors }
  }
}

export default AuthorsReducer
