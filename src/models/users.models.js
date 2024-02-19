const { DataTypes } = require("sequelize");
const { default: db } = require("../utils/database");

const Users = db.define("users", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [3, 255],
    },
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      len: [8, 255],
      isEmail: true,
    },
  },
  gender: {
    type: DataTypes.STRING,
  },
  dateOfBirth: {
    type: DataTypes.DATEONLY,
  },
  countryCode: {
    type: DataTypes.VARCHAR,
  },
  createdAt: {
    type: DataTypes.DATEONLY,
    defaultValue: sequelize.NOW,
  },
});

module.exports = Users;
