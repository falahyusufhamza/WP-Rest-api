const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_group_type_office_bearer', {
    OFFICE_BEARER_TYPE_ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    OFFICE_BEARER_NAME: {
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
      allowNull: true,
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
    tableName: 'wp_group_type_office_bearer',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "OFFICE_BEARER_TYPE_ID" },
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
