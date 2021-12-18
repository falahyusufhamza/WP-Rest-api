const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_message', {
    MESSAGE_ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    MESSAGE: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    MESSAGE_TYPE: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    SENDER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'wp_user',
        key: 'USER_ID'
      }
    },
    RECEIVER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'wp_user',
        key: 'USER_ID'
      }
    },
    GROUP_MESSAGE_YN: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    GROUP_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'wp_group',
        key: 'GROUP_ID'
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
    tableName: 'wp_message',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MESSAGE_ID" },
        ]
      },
      {
        name: "SENDER_ID_idx",
        using: "BTREE",
        fields: [
          { name: "SENDER_ID" },
        ]
      },
      {
        name: "RECEIVER_ID_idx",
        using: "BTREE",
        fields: [
          { name: "RECEIVER_ID" },
        ]
      },
      {
        name: "GROUP_ID_idx",
        using: "BTREE",
        fields: [
          { name: "GROUP_ID" },
        ]
      },
    ]
  });
};
