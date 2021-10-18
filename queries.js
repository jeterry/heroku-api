const {Pool} = require('pg');
const pool = new Pool ({
   connectionString: process.env.DATABASE_URL,
   ssl: {rejectUnauthorized: false}
});

const getSum = (request, response) => {
    pool.query('SELECT * FROM numtracker', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows[0].sum)
    })
  }

const updateSum = (request, response) => {
    if (request.body.number == undefined){
      response.status(400).send(`Error: The number field was not found in request.`)
    }
    else {
      if (isNaN(parseInt(request.body.number))){
        response.status(422).send(`Error: The number variable was not of an integer type.`)
      }
      else {
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
    }
}
  module.exports = {
    getSum,
    updateSum
  }

