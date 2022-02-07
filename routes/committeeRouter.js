const router = require("express").Router();
const { userAuthentication, userAuthorizeRoles } = require("../middleware/auth.js");
const commiteeController = require("../controllers/committeeController")
const committeeMemberController = require("../controllers/committeeMemberController")


router.post(
    "/committee",
    userAuthentication,
    userAuthorizeRoles(['admin']),
    commiteeController.addCommittee
  );

router.get(
    "/committees",
    userAuthentication,
    
    commiteeController.getCommittees
  );
  
router.get(
    "/committee/:id",
    userAuthentication,
    
    commiteeController.getCommittee
  );


  router.post(
    "/committee/:id/members",
    userAuthentication,
    userAuthorizeRoles(['admin']),
    committeeMemberController.addCommitteeMembers
  );
  
  router.get(
    "/committee/:id/members",
    userAuthentication,
    committeeMemberController.getCommitteeMembers
  );

  router.delete(
    "/committee/:id/:memberId",
    userAuthentication,
    committeeMemberController.removeCommitteeMember
  );

  router.get(
    "/committee/:id/nonmembers",
    userAuthentication,
    committeeMemberController.getNonCommitteeMembers
  );
  
  
  
  module.exports = router;