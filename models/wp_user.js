const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_user', {
    USER_ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    USER_NAME: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    PASSWORD: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    MEMBER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'wp_org_member',
        key: 'MEMBER_ID'
      }
    },
    ACTIVE_YN: {
      type: DataTypes.STRING(1),
      allowNull: false
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
    tableName: 'wp_user',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "USER_ID" },
        ]
      },
      {
        name: "ORG_ID_idx",
        using: "BTREE",
        fields: [
          { name: "ORG_ID" },
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
