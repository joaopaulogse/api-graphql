const mongoose = require("../../config/database");
const bcrypt = require("bcrypt-nodejs");

const Users = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: [true, "Já existe esse username"],
    index: true
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Já existe esse email."],
    index: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  type: {
    type: String,
    enum: ["ADMIN", "USUARIO"],
    defatul: "USUARIO",
    required: true
  }
});

Users.pre("save", next => {
  if (this.password) {
    this.password = bcrypt.hashSync(
      this.password,
      bcrypt.genSaltSync(SALT_WORK_FACTOR, null)
    );
  }
  next();
});

// methods
// generating a hash
Users.methods.generateHash = password =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(SALT_WORK_FACTOR, null));

// cheching if password is valid
Users.methods.validPassword = password =>
  bcrypt.compareSync(password, this.password);

module.exports = mongoose.model("users", Users);
