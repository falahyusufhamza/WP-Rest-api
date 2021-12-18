const sequelize = require('../db/database')
var DataTypes = require("sequelize").DataTypes;

const {ResourceNotFoundError} = require('../errors/NotFoundError')


const GroupModel = require('../models/wp_group');
const GroupConstMappingModel = require('../models/wp_group_const_mapping')
const ConstituencyModel = require('../models/wp_constituency');

let Group = GroupModel(sequelize,DataTypes)
let GroupConstMapping = GroupConstMappingModel(sequelize,DataTypes);
let Constituency = ConstituencyModel(sequelize,DataTypes);

exports.createGroup = (req,res,next) => {
    let groupName = req.body.groupName;
    let groupTypeId = req.body.groupTypeId;
    let constituencyId = req.body.constituencyId;
    let orgId = req.body.orgId

        Constituency.findByPk(constituencyId)
        .then(constituency => {
            if(constituency){
                Group.create({
                    GROUP_NAME : groupName,
                    GROUP_TYPE_ID : groupTypeId,
                    ORG_ID : orgId
                })
                .then(response => {
                    GroupConstMapping.create({
                        GROUP_ID : response.GROUP_ID,
                        CONST_ID : constituencyId
                    })
                    .then(result => {
                        res.json({
                            response : result
                        })
                    })
                    .catch(err => {
                        const error = new Error(err);
                        error.status = 422;
                        next(error)
                    })
                })
                
            }
            else{
                const error =  new ResourceNotFoundError(`constituency with id ${constituencyId} not found`)
                return next(error);
            }
        })    
        


}


exports.getGroup = (req,res,next) => {
    Group.findByPk(req.query.groupId)
    .then(group => {
        if(group !== null){
            res.json(group)
        }
        else{
            const error =  new ResourceNotFoundError(`Group with id ${req.query.groupId} not found`)
            return next(error);
        }
    })
    .catch(err => {
        console.log(err);
        res.status(422).json(err)
    })  
}