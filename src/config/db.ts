import { ConnectionOptions } from 'mongoose'

const {
    MONGO_USERNAME = 'admin',
    MONGO_PASSOWORD = 'secret',
    MONGO_HOST = 'localhost',
    MONGO_PORT = 27017,
    MONGO_DATABASE = 'auth'
} = process.env

export const MONGO_URI = `mongodb://${MONGO_USERNAME}:${
    encodeURIComponent(MONGO_PASSOWORD)
}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`

export const MONGO_OPTIONS: ConnectionOptions = {
    useNewUrlParser: true,
    //useUnifiedTopoly: true
}