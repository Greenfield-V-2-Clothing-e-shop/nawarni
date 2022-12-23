var Product = require("../model/product.model");

exports.createOne = function (req, res) {
  Product.create(req.body, (err, result) => {
    console.log(err);

    res.json(result);
  });
};
exports.retrieve = function (req, res) {
  Product.find({}, (err, Res) => {
    if (err) console.log(err);
    else {
      res.send(Res);
    }
  });
};

exports.retrieveOne = function (req, res) {
  Product.findOne({ _id: req.params.id }, (err, Res) => {
    if (err) console.log(err);
    else {
      res.json(Res);
    }
  });
};
exports.retrieveOneByCategory = function (req, res) {
  Product.findOne({ Category: req.params.Category }, (err, Res) => {
    if (err) console.log(err);
    else {
      res.json(Res);
    }
  });
};

exports.updateOne = function (req, res) {
  console.log(req.body);
  Product.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then((result) => {
      res.json({message:"ba3333"});
    })

    .catch((err) => console.log(err));
};
exports.deleteOne = function (req, res) {
  Product.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
};
