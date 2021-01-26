

const PhanDoan = require("../models/phandoan");

module.exports.index = function (req, res) {
  PhanDoan.find(function (err, data) {
    if (err) {
      res.json({ result: 0, error: err });
    } else {
      res.render("phandoan/index", { phanDoan: data, i: 1 });
    }
  })
}

module.exports.add = function (req, res) {
  res.render("phandoan/add");
}

module.exports.insertClass = function (req, res) {
  var phanDoan = [];
  let phandoan = {
    name: req.body.name,
  }
  phanDoan.push(phandoan);

  PhanDoan.collection.insertMany(phanDoan, (err) => {
    if (err) {
      res.json({ result: 0, error: err });
    } else {
      console.log("finish");
      res.redirect("/phandoan");
    }
  });
};

module.exports.edit = function (req, res) {
  PhanDoan.findById(req.params.id, function (err, item) {
    if (err) {
      res.json({ result: 0, error: err });
    } else {
      res.render("phandoan/edit", { phanDoan: item });
    }
  });
}

module.exports.editClass = function (req, res) {
  PhanDoan.updateOne(
    { _id: req.body.classClassesID },
    {
      name: req.body.name,
    },
    function (err) {
      if (err) {
        res.json({ result: 0, error: err });
      } else {
        res.redirect("/phandoan");
      }
    }
  );
}
module.exports.deleteClass = function (req, res) {
  PhanDoan.deleteOne({ _id: req.params.id }, function (err) {
    if (err) {
      res.json({ result: 0, error: err });
    } else {
      res.redirect("/phandoan");
    }
  });
}