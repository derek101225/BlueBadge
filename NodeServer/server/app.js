require("dotenv").config();
let express = require('express');
let app = express();
let sequelize = require('./db');
let journal = require('./controllers/journalcontroller');
let user = require('./controllers/usercontroller');

sequelize.sync();
// sequelize.sync({force: true})
app.use(require('./middleware/headers'));
app.use(express.json());

// exposed route
app.use('/user', user);

// procted route
app.use(require('./middleware/validate-session'))
app.use('/journal', journal)


app.listen(3000, function() {
    console.log('app is listing on port 3000');
})