import Users from '../users/model'
import SessionsSerializers from './serializers'

const SessionsController = {


    create(req, res) {
        const { email, password } = req.body
        const user = Users.findByEmail(email)

        Users.verify(user, password).then((isValid) => {
            if (isValid) {
                res
                    .header('Authorization', `Bearer ${Users.genToken(user)}`)
                    .status(201)
                    .json({
                        users: SessionsSerializers.for('create', user)
                    })
            } else {
                res
                    .status(401)
                    .json({
                        users: {
                            errors: ['Invalid credentials.']
                        }
                    })
            }
        })
    }


}

export default SessionsController;