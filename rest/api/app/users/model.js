import Model from '../model'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

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

    },

    genToken(user) {
        return jwt.sign({ sub: user.id }, 'secret', { expiresIn: '1h' })
    }

}

export default Users;