// import User from "../models/users.models";
const userssdafadsfa = [
  { username: "joao" },
  { username: "maria" },
  { username: "lucas" }
];

module.exports = {
  Query: {
    users: async (root, { username }, { models }) => {
      const user = await models.User.find();
      return user.map(x => {
        x._id = x._id.toString();
        return x;
      });
    }

    // },
  },
  Mutation: {
    getUser: async (root, { _id }, { models: { User } }) =>
      await User.findOne({ _id }),
    createUser: async (root, { user }, { models: { User } }) =>
      await new User(user).save(),
    updateUser: async (root, { _id, user }, { models: { User } }) =>
      await User.findByIdAndUpdate(_id, { $set: user }, { new : true }),
    deleteUser: async (root, {_id}, { models: {User} }) =>
      await User.findByIdAndRemove(_id).then(()=>"Deletado com Sucesso")
  }
};
