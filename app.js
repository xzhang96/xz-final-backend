const express = require('express');
const cors = require('cors');
const router = require('./src/routers');
const {sequelize} = require('./src/model')

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('./src/passport')
app.use('/', router)


sequelize.sync({force: false})
    .then(() => {
        const port = process.env.PORT || 8081;
        app.listen(port, () => {
            console.log("Server starting at " + port);
        })
    })
