const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_report_response', {
    REPORT_RESPONSE: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    REPORT_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'wp_report',
        key: 'REPORT_ID'
      }
    },
    SUBMITTED_BY_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'wp_user',
        key: 'USER_ID'
      }
    },
    SUBMITTED_DATE: {
      type: DataTypes.DATE,
      allowNull: false
    },
    STATUS: {
      type: DataTypes.STRING(45),
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
    tableName: 'wp_report_response',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "REPORT_RESPONSE" },
        ]
      },
      {
        name: "REPORT_ID_idx",
        using: "BTREE",
        fields: [
          { name: "REPORT_ID" },
        ]
      },
      {
        name: "SUBMITTED_BY_ID_idx",
        using: "BTREE",
        fields: [
          { name: "SUBMITTED_BY_ID" },
        ]
      },
    ]
  });
};
