import 'dotenv/config'

export const config  = {
    mongoUrl: process.env.DATABASE_URL,
    port: process.env.PORT
}
