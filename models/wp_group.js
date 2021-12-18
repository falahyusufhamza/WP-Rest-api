const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_group', {
    GROUP_ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    GROUP_NAME: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    GROUP_TYPE_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'wp_group_type',
        key: 'GROUP_TYPE_ID'
      }
    },
    ORG_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'wp_orgs',
        key: 'ORG_ID'
      }
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
    tableName: 'wp_group',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "GROUP_ID" },
        ]
      },
      {
        name: "GROUP_TYPE_ID_idx",
        using: "BTREE",
        fields: [
          { name: "GROUP_TYPE_ID" },
        ]
      },
      {
        name: "ORG_ID_idx",
        using: "BTREE",
        fields: [
          { name: "ORG_ID" },
        ]
      },
    ]
  });
};
