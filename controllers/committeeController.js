const db = require("../models/index.js");

const Committee = db.commitee;


const addCommittee = async (req, res) => {
   
    try {
        const {userId,accountId} = req.user
  
        req.body.currentUserId = userId;
        req.body.accountId = accountId;

      const committee = await Committee.create(req.body);
      res.status(200).send(committee);

    } catch (error) {
      res.status(500).send(error);
    }
  };

  const getCommittees = async (req, res) => {
   
    try {
       
        const {accountId} = req.user;
        let committee = await Committee.findAll({ where: {accountId}});
        
       
      res.status(200).send(committee);
      
    } catch (error) {
      res.status(500).send(error);
    }
  };


  const getCommittee = async (req, res) => {
   
    try {
        const {accountId} = req.user
        const {id}= req.params
      const committee = await Committee.findOne({ where: {id,accountId}});
      res.status(200).send(committee);
      
    } catch (error) {
      res.status(500).send(error);
    }
  };






  module.exports = {addCommittee,getCommittees,getCommittee};
  