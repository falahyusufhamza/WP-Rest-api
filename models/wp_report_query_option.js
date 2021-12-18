const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_report_query_option', {
    QUERY_OPTION_ID: {
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
    QUERY_OPTION: {
      type: DataTypes.STRING(100),
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
    tableName: 'wp_report_query_option',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "QUERY_OPTION_ID" },
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
