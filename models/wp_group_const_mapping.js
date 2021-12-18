const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_group_const_mapping', {
    GROUP_CONST_ID: {
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
    CONST_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    tableName: 'wp_group_const_mapping',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "GROUP_CONST_ID" },
        ]
      },
      {
        name: "GROUP_ID_idx",
        using: "BTREE",
        fields: [
          { name: "GROUP_ID" },
          { name: "CONST_ID" },
        ]
      },
    ]
  });
};
