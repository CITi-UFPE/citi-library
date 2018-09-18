import { schema } from 'normalizr'

const user = new schema.Entity('users')
export const libraryItem = new schema.Entity('library', {
  author: user
})
