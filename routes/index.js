var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/process/*", (req, res) => {
  //console.log(req._startTime);
  console.log('in ',req);
  
  var time = req._startTime
  var methodType = req.method
  var headers = req.headers
  var path = req.originalUrl
  var query = req.query
  var body = req.body
  var responseTime = Date.now() - time



 // res.json({ op: req });
  res.json({
    time : time,
    methodType:methodType,
    headers:headers,
    query:query,
    path:path,
    body:body,
    responseTime:responseTime + "secs"

  })
});

module.exports = router;
