var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
  //console.log(req._startTime);
  var time = req._startTime

 // res.json({ op: req });
  res.json({
    time : time
  })
});

module.exports = router;
