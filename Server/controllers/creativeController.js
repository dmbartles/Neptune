var Creative = require('../models/creativeModel');

class CreativeService {

  // list
  static list(){
    return Creative.find({})
      .then((creative)=>{
        return creative;
      });
  }

  // find
  static find(id){
    return Creative.findById(id)
      .then((creative)=>{
        return creative;
      });
  }

  // create
  static create(obj){
     var creative = new Creative(obj);
     return creative.save();
  }

  // update
  static update(id, data){
      return Creative.findById(id)
       .then((creative)=>{
         creative.set(data);
         creative.save();
         return creative;
       });
  }

  // delete
  static delete(id){
    return Creative.remove({_id: id})
      .then((obj)=>{
        return obj;
    })
  }

}

module.exports.CreativeService = CreativeService;
