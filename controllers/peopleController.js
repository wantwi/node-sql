const db = require("../models/index.js");

console.log({ db });

//create main model
const People = db.people;

//1. add product

const getAdultMembers = async (req, res) => {
  try {
    const adultmembers = await People.findAll({});

    res.status(200).send(adultmembers);
  } catch (error) {
    res.status(500).send(error);
  }
};

const addAdultMember = async (req, res) => {
  // console.log(req.file);

  req.body.image = req.file.path;

  console.log(req.body);
  return;
  try {
    const adultmembers = await People.create(res.body);

    res.status(200).send(adultmembers);
  } catch (error) {
    res.status(500).send(error);
  }
};

//2. get all product

module.exports = {
  getAdultMembers,
  addAdultMember,
};
