import db from '../db'
import Finder from '../finder'
import Pagination from '../pagination'

const Model = {

    ...Finder,
    ...Pagination,

    create(attrs) {
        const collection = this.collection()
        const record = this.withPermittedAttrs(attrs, { id: collection.length + 1 })
        console.log(record)
        this.setCollection([...collection, record]) //update val to db
        return record
    },

    update(id, attrs) {
        const collection = this.collection()
        const index = this.findIndex(id)
        const updateRecord = this.withPermittedAttrs(attrs, collection[index])

        this.setCollection([
            ...collection.slice(0, index),
            updateRecord,
            ...collection.slice(index + 1)
        ])
        return updateRecord
    },

    destroy(id) {
        const collection = this.collection()
        const index = this.findIndex(id)

        this.setCollection([
            ...collection.slice(0, index),
            ...collection.slice(index + 1)
        ])
    },

    collection() {
        return db[this.key]
    },


    withPermittedAttrs(attrs, init = {}) {
        return this.permittedAttrs.reduce(
            (record, attr) => attrs[attr] ? { ...record, [attr]: attrs[attr] } : record
            , init)
    },

    setCollection(collection) {
        db[this.key] = collection
    }

}

export default Model;