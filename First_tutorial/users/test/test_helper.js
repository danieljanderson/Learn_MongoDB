const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users_test');
mongoose.connection
  .on('open', () => console.log('good to go'))
  .on('error', error => {
    console.warn('warning', error);
  });

beforeEach(done => {
  mongoose.connection.collections.users.drop(() => {
    //Ready to run the next test!
    done();
  });
});
