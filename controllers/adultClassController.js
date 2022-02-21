const db = require("../models/index.js");

const AdultClass = db.adultClass;
const People = db.people;

const addClass = async (req, res) => {
  const { userId, accountId } = req.user;

  try {
    req.body.currentUserId = userId;
    req.body.accountId = accountId;

    // const leader =  await People.findOne({where:{accountId,id: req.body.leader}})
    // const deputy =  await People.findOne({where:{accountId,id: req.body.deputy}})
    const request = await Promise.allSettled([
      People.findOne({ where: { accountId, id: req.body.leader } }),
    ]);

    const leader = request[0];

    if (leader.value === null) {
      res.status(404).send("Leader not found");
      return;
    }

    const adultclass = await AdultClass.create(req.body);

    res.status(200).send(adultclass);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getClass = async (req, res) => {
  try {
    const { accountId } = req.user;
    const adultclass = await AdultClass.findAll({
      where: { accountId },
      include: [
        {
          model: People,
        },
      ],
    });
    res.status(200).send(adultclass);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  addClass,
  getClass,
};
