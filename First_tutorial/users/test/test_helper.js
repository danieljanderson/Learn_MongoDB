const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before(done => {
  mongoose.connect('mongodb://localhost/users_test');
  mongoose.connection
    .on('open', () => {
      done();
    })
    .on('error', error => {
      console.warn('warning', error);
    });
});

beforeEach(done => {
  mongoose.connection.collections.users.drop(() => {
    //Ready to run the next test!
    done();
  });
});
