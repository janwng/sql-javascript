const settings = require("./settings"); // settings.json
const pg = require("pg");

var knex = require('knex')({
  client: 'pg',
  connection: {
    user     : settings.user,
    password : settings.password,
    database : settings.database,
    host     : settings.hostname,
    port     : settings.port,
    ssl      : settings.ssl
  }
});

var input_firstname = process.argv[2];
var input_lastname = process.argv[3];
var input_date = process.argv[4];

knex('famous_people').insert([{first_name: input_firstname, last_name: input_lastname, birthdate: input_date}])
     .then( function (result) {
         console.log('Adding a row to your table!');
         knex.destroy(); //closes connection like db.close()
      })
