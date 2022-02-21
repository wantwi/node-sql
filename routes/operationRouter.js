const router = require("express").Router();
const { userAuthentication, userAuthorizeRoles } = require("../middleware/auth.js");

const operationType = require("../controllers/operationTypeController")
const operation = require("../controllers/operationController")
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

  router.put(
    "/operationtype/:id",
    userAuthentication,
    operationType.updateOperationType

  );

  router.delete(
    "/operationtype/:id",
    userAuthentication,
    operationType.deleteOperationType

  );

  //operations
  router.post(
    "/operation",
    userAuthentication,
    userAuthorizeRoles(['admin']),
    operation.addOperation
  );

  router.get(
    "/operation/:month/:year",
    userAuthentication,
    operation.getOperations
  );

  router.put(
    "/operation/:id",
    userAuthentication,
    operation.updateOperation
  );

  router.delete(
    "/operation/:id", 
    userAuthentication,
    operation.deleteOperation
  );

module.exports = router;