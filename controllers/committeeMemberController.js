const { Sequelize, DataTypes } = require("sequelize");
const db = require("../models/index.js");
const CommitteeMember = db.committeeMember;
const People = db.people;
const {sequelize} = db



 const addCommitteeMembers = async (req, res) => {
    const {userId,accountId} = req.user
    const {id} = req.params
 
    try {
       req.body.forEach(data =>{

        data.currentUserId = userId;
        data.accountId = accountId;
        data.committeeId = id
       })
      const committeeMembers = await CommitteeMember.bulkCreate(req.body);
      res.status(200).send(committeeMembers);
    } catch (error) {
      res.status(500).send(error);
    }
  };

  const getCommitteeMembers = async (req, res) => {
    //
  //   const {accountId} = req.user
  //   const {id} = req.params
  //   const [result,metadata] = await sequelize.query(`select * from committee_members 
  //   as cm Inner join people as pl ON 
  //   cm.memberId = pl.id 
  //   WHere cm.accountId =pl.accountId AND cm.committeeId = '${id}'`);
  //  console.log({result})

  //  res.status(200).send(result);
    try {
      const {accountId} = req.user
        const {id} = req.params
      const members = await CommitteeMember.findAll({
        where:{accountId,committeeId:id},
        include: [{
          model: People,
        
        }],
        attributes: ["memberId"]
      });
      res.status(200).send(members);
    } catch (error) {
      res.status(500).send(error);
    }
  };


  const getCommitteeMember = async (req, res) => {
    const {accountId} = req.user
    const {id,committeeId} = req.params
    try {
      const member = await ContributionType.findOne({where:{id,committeeId,accountId}});
      res.status(200).send(member);
    } catch (error) {
      res.status(500).send(error);
    }
  };


  module.exports = {
    addCommitteeMembers,
    getCommitteeMembers,
    getCommitteeMember
};

