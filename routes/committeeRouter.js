const router = require("express").Router();
const { userAuthentication, userAuthorizeRoles } = require("../middleware/auth.js");
const commiteeController = require("../controllers/committeeController")


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
  
  
  
  module.exports = router;