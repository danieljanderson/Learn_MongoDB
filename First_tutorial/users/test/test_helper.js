const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users_test');

mongoose.connect
  .once('open', () => console.log('good to go'))
  .on('error', error => {
    console.warn('warning', error);
  });
