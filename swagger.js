const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');




module.exports = {
    openapi: "3.0.3", 
    info: {
      title: "Simple Node CURD API", 
      description: "A simple todos API", 
      version: "1.0.0", 
      contact: {
        name: "Bajrang Bana", 
        email: "blbana49@gmail.com", 
        url: "http://localhost:3000", 
      },
    },
  };