const router = require("express").Router();
const { userAuthentication, userAuthorizeRoles } = require("../middleware/auth.js");
const {addClass,getClass} = require("../controllers/adultClassController")


router.post(
    "/adultclass",
    userAuthentication,
    userAuthorizeRoles(['admin']),
    addClass
  );

  router.get(
    "/adultclass",
    userAuthentication,
    getClass
  );


  module.exports = router;