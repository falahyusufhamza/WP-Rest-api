const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_report', {
    REPORT_ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    REPORT_NAME: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    TARGET_CONST_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'wp_constituency',
        key: 'CONST_ID'
      }
    },
    TARGET_GROUP_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'wp_group',
        key: 'GROUP_ID'
      }
    },
    OWNER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'wp_user',
        key: 'USER_ID'
      }
    },
    OWNER_GROUP_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'wp_group',
        key: 'GROUP_ID'
      }
    },
    DEADLINE_DATE: {
      type: DataTypes.DATE,
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
    tableName: 'wp_report',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "REPORT_ID" },
        ]
      },
      {
        name: "TARGET_CONST_ID_idx",
        using: "BTREE",
        fields: [
          { name: "TARGET_CONST_ID" },
        ]
      },
      {
        name: "OWNER_ID_idx",
        using: "BTREE",
        fields: [
          { name: "OWNER_ID" },
        ]
      },
      {
        name: "OWNER_GROUP_ID_idx",
        using: "BTREE",
        fields: [
          { name: "OWNER_GROUP_ID" },
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
        name: "TARGET_GROUP_ID_idx",
        using: "BTREE",
        fields: [
          { name: "TARGET_GROUP_ID" },
        ]
      },
    ]
  });
};
