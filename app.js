const express = require('express');
const router = require('./router');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/', router);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
