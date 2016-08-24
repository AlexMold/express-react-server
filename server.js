var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');

var app = new (require('express'))();
// var bodyParser = require('body-parser');
var port = 3000

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: true
// }));

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})
app.post('/', (req, res) => {
	console.log(req);
	res.end('OK!');
})
app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
