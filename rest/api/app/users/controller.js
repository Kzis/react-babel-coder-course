import Users from './model'

const UsersController = {
    getAll(req, res) {
        res.json({
            users: Users.findAll()
        })
    },

    get(req, res) {
        res.json({
            users: Users.find(req.params.id)
        })
    },

    create(req, res) {
        const user = Users.create({ email: req.body.email })
        res.json({
            users: user
        })
    }

}

export default UsersController;