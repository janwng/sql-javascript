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

var input = process.argv[2];

knex.select('*').from('famous_people')
.where('last_name', '=', input)
.asCallback(function(err, rows) {
  if (err) return console.error(err);

  //if no error do this
  console.log("IT WORKED", rows);

  knex.destroy(); //closes connection like db.close()
});
