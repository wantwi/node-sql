const router = require("express").Router();
const peopleController = require("../controllers/peopleController.js");
const { userAuthentication } = require("../middleware/auth.js");
const upload = require("../utils/upload");


router.get(
  "/persons/:memberType",
  userAuthentication,
  peopleController.getPersonByQuery
);

router.post(
  "/person/:memberType",
  userAuthentication,
  upload.single('image'),
  peopleController.addPerson
);



module.exports = router;
