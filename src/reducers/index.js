import AuthorsReducer from './authors'
import LibraryReducer from './library'
import LoadingReducer from './loading'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  library: LibraryReducer,
  isLoading: LoadingReducer,
  authors: AuthorsReducer
})

export default rootReducer
