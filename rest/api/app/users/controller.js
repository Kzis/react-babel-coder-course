import Users from './model'
import UsersSerializers from './serializers'

const UsersController = {
    getAll(req, res) {
        res.json({
            users: UsersSerializers.for('getAll', Users.findAll())
        })
    },

    get(req, res) {
        res.json({
            users: UsersSerializers.for('get', Users.find(req.params.id))
        })
    },

    create(req, res) {
        const user = Users.create({
            email: req.body.email
        })
        res.json({
            users: UsersSerializers.for('create', user)
        })
    }

}

export default UsersController;