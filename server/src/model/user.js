import mongoose, {Schema} from "mongoose"

const UserSchema = Schema({
    role: {
        type: String,
        enum: ['writter', 'customer', 'admin'],
        default: 'writter'
    },
    username: String,
    email: {
        type: String,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/, 'email format must be respected'],
        require: [true, 'email is required']
    },
    password: String
})

const UserCollection = mongoose.model('user', UserSchema)
export default UserCollection
