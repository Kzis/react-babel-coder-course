import Model from '../model'
import bcrypt from 'bcrypt'

const Users = {

    ...Model,
    key: 'users',
    permittedAttrs: ['email'],

    create(email, password) {

        return new Promise((resolve, reject) => {
            bcrypt.hash(password, 12, (err, hash) => {
                if (err) reject(err)

                const collection = this.collection()
                const user = {
                    id: collection.length + 1,
                    email: email,
                    password: hash,
                    isAdmin: false
                }

                this.setCollection([...collection, user])
                return resolve(user)
            })
        })

    }

}

export default Users;