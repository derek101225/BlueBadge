const Sequelize = require('sequelize');
const sequelize = new Sequelize('journal-walkthrough',
'postgres', '101225', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(function() {
    console.log('Connected to journal-walkthrough postgres datadabse');

}, 
    function(err){
        console.log(err);
    }
);

module.exports = sequelize