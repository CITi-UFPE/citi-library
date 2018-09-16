import LibraryReducer from './library'
import LoadingReducer from './loading'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  library: LibraryReducer,
  isLoading: LoadingReducer
})

export default rootReducer
