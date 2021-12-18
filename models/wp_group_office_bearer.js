const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_group_office_bearer', {
    OFFICE_BEARER_ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    OFFICE_BEARER_TYPE_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'wp_group_type_office_bearer',
        key: 'OFFICE_BEARER_TYPE_ID'
      }
    },
    MEMBER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'wp_org_member',
        key: 'MEMBER_ID'
      }
    },
    GROUP_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'wp_group',
        key: 'GROUP_ID'
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
    tableName: 'wp_group_office_bearer',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "OFFICE_BEARER_ID" },
        ]
      },
      {
        name: "OFFICE_BEARER_TYPE_ID_idx",
        using: "BTREE",
        fields: [
          { name: "OFFICE_BEARER_TYPE_ID" },
        ]
      },
      {
        name: "MEMBER_ID_idx",
        using: "BTREE",
        fields: [
          { name: "MEMBER_ID" },
        ]
      },
      {
        name: "GROUP_ID_idx",
        using: "BTREE",
        fields: [
          { name: "GROUP_ID" },
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
