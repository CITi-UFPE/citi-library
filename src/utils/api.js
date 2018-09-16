import { firebaseDatabase as database } from './firebase'

export default class Api {
  static getLibrary () {
    return database
      .collection('library')
      .orderBy('timestamp')
      .get()
      .then(results => {
        let items = []
        results.forEach(item => {
          items.push({ id: item.id, data: item.data() })
        })
        return items
      })
  }
}
