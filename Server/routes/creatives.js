var express = require('express');
var router = express.Router();
var Creative = require('../models/creativeModel');
var creativeController = require('../controllers/creativeController');
var flash = require('connect-flash');
var path = require('path');
const CreativeService = creativeController.CreativeService;

// flash middleware
router.use(flash());

// main page
router.get('/', (req, res, next)=>{
  console.log("/");
  CreativeService.list()
    .then((creatives)=>{
       res.render('main',{
         creatives : creatives
       });
    });
});

// add creative
router.get('/addcreative', (req, res, next)=>{
 console.log("/addcreative");
 res.render('addcreative');
});

// post data to new creative
router.post('/submitcreative', (req, res, next)=>{
  console.log(req.body);
  console.log("/submitcreative");
  var creative = {
    name: req.body.name,
    lob: req.body.lob,
    resFam: req.body.resFam,
    testingCode: req.body.testingCode,
    testingCodeCreativeName: req.body.testingCodeCreativeName,
    email: req.body.email,
    month: req.body.month,
    week: req.body.week,
    createdAt: Date.now(),
    updatedAt: Date.now()
  }
    console.log(creative);
    var creative = new Creative(creative);
    CreativeService.create(creative)
      .then(()=>{
        res.redirect('/creatives');
      })
      .catch((err)=>{
        if (err){
          console.log(err);
          res.redirect('/creatives');
        }
      });
});

// edit creative
router.get('/editcreative/:creativeid', (req, res, next)=> {
  console.log("/editcreative/",req.params.creativeid)
  CreativeService.find({'_id': req.params.creativeid})
    .then((creative)=>{
       res.render('editcreative', {
         creative : creative
       });
    });
});


// send updated data to creative
router.post('/updatecreative/:creativeid', (req, res, next)=>{
  console.log("/updatecreative/",req.params.creativeid)
  CreativeService.find({'_id': req.params.creativeid})
    .then((creative)=>{
      var data = {
        name: req.body.name,
        lob: req.body.lob,
        resFam: req.body.resFam,
        testingCode: req.body.testingCode,
        testingCodeCreativeName: req.body.testingCodeCreativeName,
        email: req.body.email,
        month: req.body.month,
        week: req.body.week,
        updatedAt: Date.now()
      }
    CreativeService.update(req.params.creativeid, data)
      .then(()=>{
        console.log("saved")
        res.redirect('/creatives');
      })
      .catch((err)=>{
        if (err) {
          console.log(err);
          res.redirect('/creatives');
        }
      });
  });
});

// delete creative
router.get('/deletecreative/:creativeid', (req, res, next)=> {
    console.log("/deletecreative/",req.params.creativeid);
  Creative.deleteOne({'_id': req.params.creativeid})
    .then(()=>{
            res.redirect('/creatives');
    });
});

module.exports = router;
