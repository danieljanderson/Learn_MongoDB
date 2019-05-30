const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/users_test');
mongoose.connection
  .on('open', () => console.log('good to go'))
  .on('error', error => {
    console.warn('warning', error);
  });
