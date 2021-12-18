const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_org_member', {
    MEMBER_ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FIRST_NAME: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    LAST_NAME: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    MOBILE_NUMBER: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    EMAIL: {
      type: DataTypes.STRING(45),
      allowNull: true
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
    ADDRESS: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    WHATSAPP_NUMBER: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    DOB: {
      type: DataTypes.DATE,
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
    tableName: 'wp_org_member',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MEMBER_ID" },
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
