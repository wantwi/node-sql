
const db = require("../models/index.js");
const CommitteeMember = db.committeeMember;


 const addCommitteeMembers = async (req, res) => {
    const {userId,accountId} = req.user
 
    try {
       req.body.forEach(data =>{

        data.currentUserId = userId;
        data.accountId = accountId
       })
      const committeeMember = await CommitteeMember.bulkCreate(req.body);
      res.status(200).send(committeeMember);
    } catch (error) {
      res.status(500).send(error);
    }
  };

  const getCommitteeMembers = async (req, res) => {
    try {
        const {accountId} = req.user
        const {id} = req.params
      const members = await CommitteeMember.findAll({where:{accountId,committeeId:id}});
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

