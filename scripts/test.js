const { hiscores } = require('osrs-json-api');
const { ge } = require('osrs-json-api');

hiscores
    .getPlayer('DrDiarrhea22')
    .then(console.log)
    .catch(console.error);

// ge.getItem(6585)
//     .then(console.log)
//     .catch(console.error);