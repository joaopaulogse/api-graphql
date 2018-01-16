module.exports = {
  Query: {
    users: async (root, { username }, { models }) => 
      await models.User.find(),
  },
  Mutation: {
    getUser: async (root, { _id }, { models: { User } }) =>
      await User.findOne({ _id }),
    createUser: async (root, { user }, { models: { User } }) =>
      await new User(user).save(),
    updateUser: async (root, { _id, user }, { models: { User } }) =>
      await User.findByIdAndUpdate(_id, { $set: user }, { new : true }),
    deleteUser: async (root, {_id}, { models: { User } }) =>
      await User.findByIdAndRemove(_id)
  }
};
