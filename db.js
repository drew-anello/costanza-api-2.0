const Pool = require('pg').Pool
require('dotenv').config()
const dbPort = process.env.DB_PORT
const dbUser = process.env.DB_USER
const dbHost = process.env.DB_HOST
const db = process.env.DB
const dbPW = process.env.DB_PW
const DATABSE_URL = process.env.DATABSE_URL
const PGDATABASE = process.env.PGDATABASE
const PGHOST = process.env.PGHOST
const PGPASSWORD = process.env.PGPASSWORD
const PGPORT = process.env.PGPORT
const PGUSER = process.env.PGUSER

const pool = new Pool({
  // user: PGUSER,
  // host: PGHOST,
  // database: DATABSE_URL,
  // password: PGPASSWORD,
  // port: PGPORT
  user: dbUser,
  host: dbHost,
  database: db,
  password: dbPW,
  port: dbPort
})
module.exports = pool
