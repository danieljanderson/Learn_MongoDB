const mongoose = require('mongoose')
const PostSchema = require('./post')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: {
    type: String,
    validate: {
      validator: name => name.length > 2,
      message: 'name must be longer than 2 characters'
    },
    required: [true, 'Name is required']
  },
  posts: [PostSchema],
  likes: Number,
  blogPosts: [{ type: Schema.Types.ObjectId, ref: 'blogPost' }]
})
UserSchema.virtual('postCount').get(function() {
  return this.posts.length
})

UserSchema.pre('remove', function(next) {
  const blogPost = mongoose.model('blogPost')
  //this === joe
  // what this code means is that look through all the records in the blog post.  If the id is In the array remove it.
  blogPost.remove({ _id: { $in: this.blogPosts } }).then(() => next())
})
const User = mongoose.model('user', UserSchema)

module.exports = User
