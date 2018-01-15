
// import User from "../models/users.models";
const userssdafadsfa = [
    { username:"joao" },
    { username:"maria" },
    { username:"lucas" }
]

module.exports = {
    Query: {
        users: async (root, { username }, { models }) => {
            const user = await models.User.find();
            return user.map(x=>{
                x._id = x._id.toString();
                return x;
            })
        },
            
        
        // },
    },
    Mutation:{
        getUser: async (root, { _id }, { models: { User } }) =>{
            const user = await User.findOne({_id});
            console.log(user)
            return user;
        }
    }
}