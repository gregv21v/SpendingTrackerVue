const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const fs = require('fs')
const multer  = require('multer');


// Setup
const app = express();
const port = process.env['WEB_APP_PORT'];
const config = require('./webpack.config.dev.js');
const compiler = webpack(config);
const middleware = webpackMiddleware(compiler, {
  publicPath: "/",
  serverSideRender: true,
  watchOptions: {
    // Due to iOS devices memory constraints
    // disabling file watching is recommended 
    ignored: /.*/
  }
});
app.use(middleware);
app.get('/', (req, res) => {
  res.sendFile('public/index.html', { root: __dirname });
});

// Launch app
app.listen(port, () => {
  console.log(
    'Launching app... http://localhost:' + port + '\n'
  );
});

// Register app and middleware. Required for better
// performance when running from play.js
try { pjs.register(app, middleware); } catch (error) { }


var upload = multer({ dest: '/tmp/'});

app.post(
  '/upload_receipt_img', 
  upload.single("file"),
  function(req, res) {
    console.log("File uploaded")
    var file = __dirname + '/' + req.file.filename;
    fs.rename(req.file.path, file, function(err) {
      if (err) {
        console.log(err);
        res.send(500);
      } else {
        res.json({
          message: 'File uploaded successfully',
          filename: req.file.filename
        });
      }
    });
  }
)

