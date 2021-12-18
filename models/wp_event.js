const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_event', {
    EVENT_ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    EVENT_NAME: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    EVENT_OWNER_GROUP_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'wp_group',
        key: 'GROUP_ID'
      }
    },
    EVENT_OWNER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'wp_user',
        key: 'USER_ID'
      }
    },
    TARGET_CONST_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'wp_constituency',
        key: 'CONST_ID'
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
    tableName: 'wp_event',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "EVENT_ID" },
        ]
      },
      {
        name: "EVENT_OWNER_GROUP_ID_idx",
        using: "BTREE",
        fields: [
          { name: "EVENT_OWNER_GROUP_ID" },
        ]
      },
      {
        name: "EVENT_OWNER_ID_idx",
        using: "BTREE",
        fields: [
          { name: "EVENT_OWNER_ID" },
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
        name: "ORG_ID_idx",
        using: "BTREE",
        fields: [
          { name: "ORG_ID" },
        ]
      },
    ]
  });
};
