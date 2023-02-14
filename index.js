const express = require('express');
const app = express();
const port = 3000;
const router = require('./src/routes');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(
    '/api-docs',
    swaggerUi.serve, 
    swaggerUi.setup(swaggerDocument)
  );

app.use('/user', router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});