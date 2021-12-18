const sequelize = require('../db/database')
var DataTypes = require("sequelize").DataTypes;

const OrgModel = require('../models/wp_orgs');

let org = OrgModel(sequelize,DataTypes);

exports.getOrgs = (req,res,next) => {
    org.findAll()
    .then(response => {
        res.json(response)
    })
    .catch(err => {
        console.log(err);
    })
}

exports.getOrg = (req,res,next) => {
    org.findByPk(req.body.id)
    .then(response => {
        res.json(response)
    })
    .catch(err => console.log(err))
}