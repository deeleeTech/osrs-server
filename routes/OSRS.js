var express = require('express');
//OSRS API +++++++++++++
const { hiscores } = require('osrs-json-api');
const { ge } = require('osrs-json-api');
//+++++++++++++++++++++++
var router = express.Router();

/* GET stats for a user. */
router.get('/getPlayerStats', function(req, res, next) {
  //console.log(req.query);
  const playername = req.query.playername;
  hiscores
    .getPlayer(playername)
    .then((playerStats)=>{
      playerStats.totalSkills = playerStats.skills.overall;
      delete playerStats.SoulWarsZeal;
      delete playerStats.bh;
      delete playerStats.lms;
      delete playerStats.skills.overall;
      res.send(playerStats);
    })
    .catch((error)=>{
      console.log(error);
      res.send(error);
    })
});

module.exports = router;