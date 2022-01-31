const router = require("express").Router();
const contributionTypeController = require("../controllers/ContributionTypeController");
const { userAuthentication,userAuthorizeRoles } = require("../middleware/auth.js");
const upload = require("../utils/upload");



router.post(
    "/contribution/type",
    userAuthentication,
    userAuthorizeRoles(['admin']),
    contributionTypeController.addContributionType
  );
  
router.get(
    "/contribution/type",
    userAuthentication,
    contributionTypeController.getContributionTypes
  );

router.get(
  "/contribution/type/:id",
  userAuthentication,
  contributionTypeController.getContributionType
);



router.post(
    "/contribution",
    userAuthentication,
    userAuthorizeRoles(['admin']),
    contributionTypeController.addContribution
  );


module.exports = router;