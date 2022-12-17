var Cart=require ("../model/cart.model")



exports.createOne = function (req, res) {
  Cart.create(req.body,(err,result)=>{
        console.log(err)
        
            
            res.json(result)
    })
}


exports.retrieve = function (req, res) {
    Cart.find({},(err,Res)=>{
        if(err) console.log(err)
        else {res.send(Res)};
    })
};

exports.retrieveOne = function (req, res) {
    Cart.findOne({_id:req.params.id},(err,Res)=>{
        if(err) console.log(err)
        else {res.json(Res)};
    })

};

exports.updateOne = function (req, res) {
    Cart.findOneAndUpdate({_id:req.params.id},req.body)
    .then((result)=>{res.send(result)})

.catch((err)=>console.log(err))
}
exports.deleteOne = function (req, res) {
    Cart.deleteOne({_id:req.params.id})
    .then((result)=>{res.send(result)})
    .catch((err)=>console.log(err))
};
exports.deleteAll = function (req, res) {
    Cart.deleteMany({},(err,Res)=>{
        if(err) console.log(err)
        else {res.send(Res)};
    })
};