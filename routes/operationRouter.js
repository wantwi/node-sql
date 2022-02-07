const router = require("express").Router();
const { userAuthentication, userAuthorizeRoles } = require("../middleware/auth.js");

const operationType = require("../controllers/operationTypeController")

  router.post(
    "/operationtype",
    userAuthentication,
    userAuthorizeRoles(['admin']),
    operationType.addOperationType
  );


  router.get(
    "/operationtype",
    userAuthentication,
    operationType.getOperationTypes
  );


module.exports = router;