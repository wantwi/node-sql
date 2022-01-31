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
    "/committee/members",
    userAuthentication,
    userAuthorizeRoles(['admin']),
    committeeMemberController.addCommitteeMembers
  );
  
  router.get(
    "/committee/members/:id",
    userAuthentication,
    committeeMemberController.getCommitteeMembers
  );
  
  
  
  module.exports = router;