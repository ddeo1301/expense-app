const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./util/database');
const Expense = require('./models/Expense');

var cors = require('cors');
const app = express();
app.use(cors());

const expenseRoutes = require('./routes/expense')
app.use(bodyParser.json({ extended: false }));

app.use(expenseRoutes);

sequelize
 .sync()
 .then(result => {
   // app.listen(4000);
    app.listen(3000);
 })
 .catch(err => {
    console.log(err);
 })

// const path = require('path');

// const express = require('express');
// const bodyParser = require('body-parser');

// var cors = require('cors');

// const app = express();
// app.use(cors());

// app.use(express.json());

// const sequelize = require('./util/database');
// const User = require('./models/User');
// const userRoutes = require('./routes/user');

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use('/user', userRoutes);

// sequelize.sync()
//   .then(result => {
//     app.listen(3000);
//   })
//   .catch(err => {
//     console.log(err);
//   });