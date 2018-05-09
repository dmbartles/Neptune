var express = require('express');
var router = express.Router();
var creativeController = require('../../controllers/creativeController');
const CreativeService = creativeController.CreativeService;

// set up content-type middleware
router.use((req, res, next)=>{
  res.set({'Content-type':'application/json'});
  res.set({
    // allow access from any domain
    'Access-Control-Allow-Origin':'*',
    // allow methods and headers for 'preflight'
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers',
  });
  // if this is a preflight, we're done and can send the response with our headers
  if(req.method == 'OPTIONS'){
    return res.status(200).end();
  }
  next();
});


// list
router.get('/', (req, res, next)=>{
  CreativeService.list()
    .then((creatives)=>{
      console.log('API: Found all creatives');
      res.status(200);
      res.send(JSON.stringify(creatives));
    });
});

// find
router.get('/:creativeid', (req, res, next)=>{
  CreativeService.find(req.params.creativeid)
    .then((creative)=>{
      console.log('API: Found creative', creative);
      res.status(200);
      res.send(JSON.stringify(creative));
    });
});

// create
router.post('/submitcreative', (req, res, next)=>{
  console.log(req.body);
  console.log("/submitcreative");
  var creative = {
    name: req.body.name,
    lob: req.body.lob,
    resFam: req.body.resFam,
    status: req.body.status,
    supplier: req.body.supplier,
    miscCharges: req.body.miscCharges,
    estVolume: req.body.estVolume,
    actualVolume: req.body.actualVolume,
    estCost: req.body.estCost,
    actualCost: req.body.actualCost,
    testingCode: req.body.testingCode,
    testingCodeCreativeName: req.body.testingCodeCreativeName,
    printMethod: req.body.printMethod,
    simplexDuplex: req.body.simplexDuplex,
    height: req.body.height,
    insert: req.body.insert,
    email: req.body.email,
    month: req.body.month,
    week: req.body.week,
    createdAt: Date.now(),
    updatedAt: Date.now()
  }
    CreativeService.create(creative)
      .then((creative)=>{
        console.log('API: Saved creative', creative);
        res.status(200);
        res.send(JSON.stringify(creative));
      });
});

// update
router.put('/:creativeid', (req, res, next)=>{
  CreativeService.update(req.params.creativeid, req.body)
    .then((updatedCreative)=>{
      console.log('API: Updated creative', updatedCreative);
      res.status(200);
      res.send(JSON.stringify(updatedCreative));
    });
});

// delete
router.delete('/:creativeid', (req, res, next)=>{
  CreativeService.delete(req.params.creativeid)
    .then((creative)=>{
      console.log('API: Deleted creative', creative);
      res.status(200);
      res.send(JSON.stringify(creative));
    });
});

module.exports = router;
