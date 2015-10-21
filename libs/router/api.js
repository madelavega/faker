var express = require('express');
var router = express.Router();

// Middleware for this router. This function will always
// be called before entering specific routes.
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// define the home page route
router.get('/', function(req, res) {
  res.send('Birds home page');
});

router.get('/:resourceName/*', function(req, res) {
  console.log("Entered " + req.params.resourceName);
  res.send("Ok. Entered " + req.params["0"]);
  res.end();
});

module.exports = router;