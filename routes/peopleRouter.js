const router = require("express").Router();
const peopleController = require("../controllers/peopleController.js");
const { userAuthentication } = require("../middleware/auth.js");
const upload = require("../utils/upload");

router.get(
  "/getAdultMembers",
  userAuthentication,
  peopleController.getAdultMembers
);
//router.get('/getJuniorMember',productController.getProducts)
router.post(
  "/addAdultMember",
  userAuthentication,
  upload.single("image"),
  peopleController.addAdultMember
);
module.exports = router;
