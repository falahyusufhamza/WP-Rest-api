var DataTypes = require("sequelize").DataTypes;
var _wp_report_response = require("./models/wp_report_response");

function initModels(sequelize) {
  var wp_report_response = _wp_report_response(sequelize, DataTypes);

  wp_report_response.belongsTo(wp_report, { as: "REPORT", foreignKey: "REPORT_ID"});
  wp_report.hasMany(wp_report_response, { as: "wp_report_responses", foreignKey: "REPORT_ID"});
  wp_report_response.belongsTo(wp_user, { as: "SUBMITTED_BY", foreignKey: "SUBMITTED_BY_ID"});
  wp_user.hasMany(wp_report_response, { as: "wp_report_responses", foreignKey: "SUBMITTED_BY_ID"});

  return {
    wp_report_response,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
