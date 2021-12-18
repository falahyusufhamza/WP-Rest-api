const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_report_response_detail', {
    RESPONSE_DETAIL_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    REPORT_QUERY_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'wp_report_query',
        key: 'REPORT_QUERY_ID'
      }
    },
    RESPONSE: {
      type: DataTypes.STRING(1000),
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
    tableName: 'wp_report_response_detail',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "RESPONSE_DETAIL_ID" },
        ]
      },
      {
        name: "REPORT_QUERY_ID_idx",
        using: "BTREE",
        fields: [
          { name: "REPORT_QUERY_ID" },
        ]
      },
    ]
  });
};
