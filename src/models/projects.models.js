const { DataTypes, Sequelize } = require("sequelize");
const { default: db } = require("../utils/database");

const Projects = db.define("projects", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  merchantId: {
    type: DataTypes.INTEGER,
    references: {
      model: "Projects",
      key: "id",
    },
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL,
    validate: {
      min: 0,
    },
  },
  status: {
    type: DataTypes.ENUM,
    values: ["active", "banned", "inactive", "deleted"],
  },
  createdAt: {
    type: DataTypes.DATEONLY,
    defaultValue: Sequelize.NOW,
  },
});

module.exports = Projects;
