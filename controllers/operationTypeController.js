const db = require("../models/index.js");

const OperationType =   db.operationtype

const addOperationType = async (req, res) => {
    const {userId,accountId} = req.user
    console.log(req.user)
    req.body.currentUserId = userId;
    req.body.accountId = accountId;
 
    try {
     
      const operationtype = await OperationType.create(req.body);
      res.status(200).send(operationtype);
    } catch (error) {
      res.status(500).send(error);
    }
  };

  const getOperationTypes = async (req, res) => {
    const {accountId} = req.user
    try {
      const operationType = await OperationType.findAll({where:{accountId}});
      res.status(200).send(operationType);
    } catch (error) {
      res.status(500).send(error);
    }
  };

  const updateOperationType = async (req, res) => {
    const {accountId} = req.user
    const {id} = req.params
  
    try {
     
      const operationtype = await OperationType.update(req.body,{where:{id,accountId}});
      res.status(200).send(operationtype);
    } catch (error) {
      res.status(500).send(error);
    }
  };

  const deleteOperationType = async (req, res) => {
    const {accountId} = req.user
    const {id} = req.params


    console.log({id})
  //return
    try {
     
      const operationtype = await OperationType.destroy({where:{id,accountId}});
      console.log({operationtype})
      res.status(200).send(operationtype.toString());
    } catch (error) {
      res.status(500).send(error);
    }
  };

  module.exports = {
    addOperationType,
    getOperationTypes,
    updateOperationType,
    deleteOperationType
};
