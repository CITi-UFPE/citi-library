import { replace, deburr, toLower } from 'lodash'

export const urlfyAuthorUsername = username => {
  return replace(toLower(deburr(username)), ' ', '')
}
