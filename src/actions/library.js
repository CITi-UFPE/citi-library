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

export const simulateGetLibrary = () => dispatch => {
  dispatch(startLoading())
  const results = [
    {
      id: 'fu81j2f',
      data: {
        authorId: 'H',
        content: 'Amo como o React funciona.',
        tags: null,
        timestamp: 1537090378
      }
    },
    {
      id: '1e2y9281ud',
      data: {
        authorId: 'V',
        content: 'Se algum dia vocês precisarem configurar o S3 num projeto em Django e as imagens não estiverem aparecendo, primeiro chequem o console (no developer tools) pra ver qual o erro que está dando. Geralmente é um erro que tem No \'Access-Control-Allow-Origin\' header is present on the requested resource.. Pra resolver basta configurar as configurações CORS do bucket.',
        tags: null,
        timestamp: 1537096918
      }
    }
  ]

  return new Promise(resolve => (
    setTimeout(() => {
      dispatch(receivedLibrary(results))
      dispatch(stopLoading())
      resolve()
    }, 900)
  ))
}
