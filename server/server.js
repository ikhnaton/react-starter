const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
{
	extended: true
}));

app.use("/", require('./routes'));

let port = process.env.PORT || 9999;
	http.createServer(app).listen(port, () =>
	{
		console.log(`Server started on http://localhost:${port}`);
	});
//});
