import _ from 'lodash'

export const parseTags = tagsList => {
  const tags = tagsList
    .map(i => i.data.tags)
    .filter(i => i !== '')
    .map(i => (i.includes(',') ? i.split(',') : i))
  return _.uniq(_.flatten(tags))
}
