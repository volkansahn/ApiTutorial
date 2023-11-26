const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/auth.routes.js');
const postRoutes = require('./routes/post.routes.js');

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

app.use('/api/auth',authRoutes);
app.use('/api/posts',postRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
    }
);

