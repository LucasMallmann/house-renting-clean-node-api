export default {
  mongoUrl: process.env.MONGO_URL ?? 'mongodb://localhost:27017/house-renting',
  port: process.env.PORT ?? 5050
}
