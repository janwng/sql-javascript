const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

var input = process.argv[2];

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }

  client.query("SELECT * FROM famous_people WHERE last_name = $1 OR first_name = $1", [input], (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }

    outputResults(result.rows);
  
    client.end();
  });
});

function outputResults(result) {
  for (i = 0; i < result.length; i++) {
    var string = '-' + result[i].id + ': ' + result[i].first_name + ' ' + result[i].last_name + ', born ' + result[i].birthdate;
    console.log(string);
  }
}
