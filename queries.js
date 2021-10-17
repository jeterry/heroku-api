const Pool = require('pg').Pool
const pool = new Pool({
  username: 'nvvurgjxtsozci',
  host: 'ec2-54-159-35-35.compute-1.amazonaws.com',
  dbname: 'dd3no12mrhnt3m',
  password: '666311f048ac1b3b7de9dfa962b655b4a18298c83b165f4180d34aae8dc642f1',
  port: 5432,
})
const getSum = (request, response) => {
    pool.query('SELECT * FROM numtracker', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows[0].sum)
    })
  }

const updateSum = (request, response) => {
console.log(request.body)
console.log(request.body.number)
    pool.query(
        'UPDATE numtracker SET sum=CASE WHEN sum is NULL THEN $1 ELSE sum + $1 END',
        [request.body.number],
        (error) => {
        if (error) {
            throw error
        }
        response.status(200).send(`The sum was successfully updated.`)
        }
    )
}
  module.exports = {
    getSum,
    updateSum
  }

