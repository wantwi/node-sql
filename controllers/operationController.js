const db = require("../models/index.js");

const Operation =   db.operation

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
      const operation = await Operation.findAll({where:{month,year,accountId}});
      res.status(200).send(operation);
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
