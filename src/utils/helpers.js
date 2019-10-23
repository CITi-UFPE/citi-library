import { replace, deburr, toLower, escape } from 'lodash'

export const urlfyAuthorUsername = username => {
  return replace(toLower(deburr(username)), ' ', '')
}

export const slugifyTagName = tagName => {
  return replace(toLower(deburr(escape(replace(tagName, '/', '+')))), ' ', '')
}

export const deslugifyTagName = tagName => {
  return replace(tagName, '+', '/')
}
