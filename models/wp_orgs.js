const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_orgs', {
    ORG_ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ORG_NAME: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    ORG_IMG_URL: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    PARENT_ORG_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ORG_DESCRIPTION: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE,
  },
  updatedAt: {
      field: 'updated_at',
      type: DataTypes.DATE,
  },
  }, {
    sequelize,
    tableName: 'wp_orgs',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ORG_ID" },
        ]
      },
    ]
  });
};
