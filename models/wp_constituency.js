const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_constituency', {
    CONST_ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CONST_NAME: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    PARENT_CONST_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CONST_TYPE_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'wp_const_type',
        key: 'CONST_TYPE_ID'
      }
    },
    ACTIVE_YN: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    INACTIVE_SINCE: {
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
    tableName: 'wp_constituency',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CONST_ID" },
        ]
      },
      {
        name: "CONST_TYPE_ID_idx",
        using: "BTREE",
        fields: [
          { name: "CONST_TYPE_ID" },
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
