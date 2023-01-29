const Pool = require('pg').Pool
require('dotenv').config()
const dbPort = process.env.DB_PORT
const dbUser = process.env.DB_USER
const dbHost = process.env.DB_HOST
const db = process.env.DB
const dbPW = process.env.DB_PW
const pool = new pool({
  user: dbUser,
  host: dbHost,
  database: db,
  password: dbPW,
  port: dbPort
})
module.exports = pool
