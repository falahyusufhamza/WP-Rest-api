const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_report_query', {
    REPORT_QUERY_ID: {
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
    QUERY: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    QUERY_TYPE: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    MANDATORY_YN: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    MULTI_SELECT_YN: {
      type: DataTypes.STRING(1),
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
    tableName: 'wp_report_query',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "REPORT_QUERY_ID" },
        ]
      },
      {
        name: "REPORT_ID_idx",
        using: "BTREE",
        fields: [
          { name: "REPORT_ID" },
        ]
      },
    ]
  });
};
