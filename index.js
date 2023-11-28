const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const routes = require('./routes/routes.js');

const db = require('./config/database.js');

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

db();

app.use('/api',routes);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
    }
);

