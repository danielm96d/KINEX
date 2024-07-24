// app.js
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const knex = require('knex')(require('../knexfile')[process.env.NODE_ENV||'development']);

app.use(express.json());

app.get('/', function(req, res) {
  res.send('SERVER IS RUNNING')
});

app.get('/pets', (req, res)=>{
  knex.from('pet')
    .select('*')
    .then(data=>res.status(200).json(data))
    .catch(err=>
      res.status(404).json({
        message: "The data you are searching doesn't exist"
      })
    )
})

app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}`);
});