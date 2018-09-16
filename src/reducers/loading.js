import { START_LOADING, STOP_LOADING } from 'actions/loading'

const LoadingReducer = (loading = {}, action) => {
  switch (action.type) {
    case START_LOADING:
      return true
    case STOP_LOADING:
    default:
      return false
  }
}

export default LoadingReducer
