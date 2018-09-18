import AuthorsReducer from './authors'
import LibraryReducer from './library'
import LoadingReducer from './loading'
import TagsReducer from './tags'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  library: LibraryReducer,
  isLoading: LoadingReducer,
  authors: AuthorsReducer,
  tags: TagsReducer
})

export default rootReducer
