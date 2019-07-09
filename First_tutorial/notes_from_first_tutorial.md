This project is based on the course on udemy called Complete Developers Guide to MongoDB

Any questions about documentation and syntax look up mongoose.

Day 1
Promises
They are used to handle anything asynchronous

They when you make a promise ie function name = new Promise (resolve,reject)
you are creating a new promise object

When you create the promise your are passing in arguments for the resolve and reject functions

reject and resolve manipulate the state of the promise

promises have three states
'unresolved' = waiting for the code to run
'resolved' = code ran and was successful (ie when you hit a website and it shows you a webpage)
'rejected' = code that ran but something went wrong (ie when you get a 400 error on a websire)

we as the devolopers determine what resoved and rejected are.

StartGame().then() will the evaluate to the resolved value you determined in the promises
StartGame().catch() will evaluate to the value you rejected determined in the promises

Day 2

Schema is what is used to define how a record is stored.
example is
const UserSchema = new Schema ({
name: String

})

each user will have a record with a name attribute and what is there ie "paul" will be a string

When you create a database its called a model.
ie
const User = mongoose.model('user',UserSchema).
this means that each record is going to expect to be formatted by the UserSchema

the User is referring to the whole database not just one user.

Day 3
const joe = new User
User is the User model or User Class

Joe wiould be the instance of a User class

Day 4
The reason why we add the before function before the mongoose.connection is because we want to run our error check after we connect to the mongoose database

The difference between beforeEach and before is that before() will run exactly one time for all of your test suite

Day 5
Class.find(criteria) find all the users that match the given criteria. Returns an array

Class.findOne(criteria) Find the first user that matches the criteria. Returns a single record.
In mongodb and mongoose as soon as you make a new instance of your model it automatically creates a record id.

the \_id property is actually an object that contains the string not a raw string. However when compairing two \_id property strings with an === it will fail. The strings will be the same but the objectID(which is an object) that wraps them will be different.

joe
.remove()
.then(() => User.findOne({ name: 'Joe' }))
.then(user => {
assert(user === null);
done();
});

explanation of the code up there
joe.remove() returns a promise
we call .then(() => User.findOne({ name: 'Joe' })) because we want to see if joe.remove really was removed
after that we want to call
.then(user => {
assert(user === null);
done();
we assert that user===null because there is not going to be another user in our database.

Now the variable user. user is the result of the evaluation of User.findOne({name:'Joe'}) because user is going into a function you could call it what ever you wanted.

use instance.remove when you want to remove one instance of the record
you use class.remove when you want to remove a bunch of records with some given criteria

Subdocuments is the term used for linking two schemes together This example uses Users and Posts. Users will have a model but a Post will not. The reason being is that the User can make many posts.

The difference between this code .then(user => {
user.posts.push({ title: 'New Post' });
return user.save();
})

      and this code
      .then(() => User.findOne({ name: 'Joe' }))

this code needs a return value because it uses {}
then(user => {
user.posts.push({ title: 'New Post' });
return user.save();
})

Also if you are saving subdocuments you have to save the whole user not just the subdocuments

virtual types is any sort of property that is stored on the model that doesnt get stored in the mongoDB database the server.

virtual types use getters and setters of ES6

In mocha if you put a x in front of an it block it will not run.

const BlogPost = mongoose.model('blogPost',BlogPostSchema)
blogPost is the actual name of the collection (or database)

Promise.all([joe.save(), blogPost.save(), comment.save()]).then(() => {
done()
you have to have a promise all because you dont know which save will be the last one to run. You want to make sure that the done function runs only after all of the collections have been saved.

it.only will only run that it block test
