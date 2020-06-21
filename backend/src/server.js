const app = require('./app');

const port = 3333;

app.listen(port, function() {
  console.log(`Server is running on URL http://localhost:${port}`);
});