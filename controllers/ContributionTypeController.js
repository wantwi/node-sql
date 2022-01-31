const db = require("../models/index.js");
const ContributionType = db.contributionType;





const addContributionType = async (req, res) => {
    const {userId,accountId} = req.user
 
    try {
        req.body.currentUserId = userId;
        req.body.accountId = accountId;
      const contributionType = await ContributionType.create(req.body);
      res.status(200).send(contributionType);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  

  
const getContributionTypes = async (req, res) => {
    const {accountId} = req.user
 
    try {
      const contributionType = await ContributionType.findAll({where:{accountId}});
      res.status(200).send(contributionType);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  
  const getContributionType = async (req, res) => {
    const {accountId} = req.user
    const {id} = req.params
    try {
      const contributionType = await ContributionType.findOne({where:{id,accountId}});
      res.status(200).send(contributionType);
    } catch (error) {
      res.status(500).send(error);
    }
  };


  const addContribution = async (req, res) => {
    const {userId,accountId} = req.user
 
    try {
       req.body.forEach(data =>{

        data.userId = userId;
        data.accountId = accountId
       })
      const contributionType = await ContributionType.bulkCreate(req.body);
      res.status(200).send(req.body);
    } catch (error) {
      res.status(500).send(error);
    }
  };

  const getContribution = async (req, res) => {
    const {accountId} = req.user
 
    try {
      const contribution = await ContributionTypedAll({where:{accountId}});
      res.status(200).send(contributionType);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  module.exports = {
      addContributionType,
      getContributionTypes,
      getContributionType,
      addContribution,
      getContribution
  };
  