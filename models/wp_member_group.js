const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_member_group', {
    MEMBER_GROUP_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    GROUP_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'wp_group',
        key: 'GROUP_ID'
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
    tableName: 'wp_member_group',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MEMBER_GROUP_ID" },
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
        name: "MEMBER_ID_idx",
        using: "BTREE",
        fields: [
          { name: "MEMBER_ID" },
        ]
      },
    ]
  });
};
