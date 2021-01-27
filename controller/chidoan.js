const ChiDoan = require("../models/chidoan");
const PhanDoan = require("../models/phandoan");

module.exports.index = function (req, res) {
	ChiDoan.find(function (err, data) {
		if (err) {
			res.json({ result: 0, error: err });
		} else {
			res.render("chidoan/index", { chiDoan: data, i: 1 });
		}
	})
}

module.exports.add = function (req, res) {
	PhanDoan.find(function (err, dataPhanDoan) {
		if (err) {
			res.json({ result: 0, error: err });
		} else {
			res.render("chidoan/add", { phanDoan: dataPhanDoan });
		}
	});
}

module.exports.insertClass = function (req, res) {
	var chiDoan = [];
	let chidoan = {
		name: req.body.name,
		phanDoan: req.body.phanDoan,
	}
	chiDoan.push(chidoan);

	ChiDoan.collection.insertMany(chiDoan, (err) => {
		if (err) {
			res.json({ result: 0, error: err });
		} else {
			console.log("finish");
			res.redirect("/chidoan");
		}
	});
};

module.exports.edit = async function (req, res) {
	const data = await PhanDoan.find(function (err, data) {
		if (err) {
			res.json({ result: 0, error: err });
		} else {
			return data;
		}
	});
	const item = await ChiDoan.findById(req.params.id, function (err, item) {
		if (err) {
			res.json({ result: 0, error: err });
		} else {
			return item;
		}
	});
	res.render("chidoan/edit", { chiDoan: item, phanDoan: data });


}

module.exports.editClass = function (req, res) {
	ChiDoan.updateOne(
		{ _id: req.body.classClassesID },
		{
			name: req.body.name,
		},
		function (err) {
			if (err) {
				res.json({ result: 0, error: err });
			} else {
				res.redirect("/chidoan");
			}
		}
	);
}
module.exports.deleteClass = function (req, res) {
	ChiDoan.deleteOne({ _id: req.params.id }, function (err) {
		if (err) {
			res.json({ result: 0, error: err });
		} else {
			res.redirect("/chidoan");
		}
	});
}