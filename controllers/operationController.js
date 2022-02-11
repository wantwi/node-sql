const db = require("../models/index.js");
const { Sequelize, DataTypes } = require("sequelize");
const Operation =   db.operation
const OperationType = db.operationtype



const addOperation = async (req, res) => {
    const {userId,accountId} = req.user
   
 
    try {
      req.body.forEach(data =>{
        data.currentUserId = userId;
        data.accountId = accountId;
       })

      
       

      const operation = await Operation.bulkCreate(req.body);
      res.status(200).send(operation);
    } catch (error) {
      res.status(500).send(error);
    }
  };

  const getOperations = async (req, res) => {
    const {accountId} = req.user
    const {month,year} = req.params
    try {


     

      const [results, metadata] = await db.sequelize.query("SELECT ops.id,ops.operationId, week1,week2,week3,week4, SUM(`week1`+`week2`+`week3`+`week4`+`week5`) AS `total`,optypes.name FROM `operations` AS `ops` INNER JOIN operationtypes As optypes ON ops.operationId = optypes.id WHERE `ops`.`month` = ? AND `ops`.`year` = ? AND `ops`.`accountId` =?",
      {
        replacements:[month,year,accountId]
      }
      )
     
  //     const operationType = await OperationType.findAll({where:{accountId}});
      
  //     const operation = await Operation.findAll({
  //       where:{month,year,accountId},
  //     },
      
  //       );
  //     if(operation && operationType ){
  //       let newop ={}
  //       let result = []
      
  // operation.forEach(x =>
  //        {
  //         newop =  {name : operationType.find(y =>y.id ===  x.operationId).name,...x.dataValues}
  //         result.push(newop)
  //     } )

   
     
      //}

      res.status(200).send(results);
     
    } catch (error) {
      res.status(500).send(error);
    }
  };

  const updateOperation = async (req, res) => {
    const {accountId} = req.user
    const {id} = req.params
  
    try {
     
      const operation = await Operation.update(req.body,{where:{id,accountId}});
      res.status(200).send(operation);
    } catch (error) {
      res.status(500).send(error);
    }
  };

  const deleteOperation = async (req, res) => {
    const {accountId} = req.user
    const {id} = req.params


    console.log({id})
  //return
    try {
     
      const operation = await Operation.destroy({where:{id,accountId}});
      console.log({operation})
      res.status(200).send(operation.toString());
    } catch (error) {
      res.status(500).send(error);
    }
  };

  module.exports = {
    addOperation,
    getOperations,
    //updateOperation,
   // deleteOperation
};
