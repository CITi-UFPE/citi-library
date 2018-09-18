import { Tags } from 'actions/tags'

const TagsReducer = (tags = [], action) => {
  switch (action.type) {
    case Tags.RECEIVED_TAGS:
      return [
        ...tags,
        ...action.tags
      ]
    default:
      return [ ...tags ]
  }
}

export default TagsReducer
