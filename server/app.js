const express = require('express'),
      path = require('path'),
      logger = require('morgan'),
      cookieParser = require('cookie-parser'),
      bodyParser = require('body-parser');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../', 'client')));



app.get('/api/users', (req, res) => {
  setTimeout(() => {
    res.json([
      {
        id: 1,
        name: "Juan",
        age: 15
      },
      {
        id: 2,
        name: "Ana",
        age: 20
      },
      {
        id: 3,
        name: "Pedro",
        age: 50
      }
    ]);
  }, 1000);
});




// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({'data': 'Error, not found'});
});

module.exports = app;