
import Serializers from '../serializers'

const SessionsSerializers = {
    ...Serializers,


    create(user) {
        return this.serializers(user)
    },

    serializers(user) {
        const { id, email, isAdmin } = user
        return { id, email, isAdmin }
    },

}

export default SessionsSerializers;