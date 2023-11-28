const express = require('express');
const authRoutes = require('./routes/auth.routes.js');
const postRoutes = require('./routes/post.routes.js');

const routerApp = express.app();

routerApp.use(authRoutes);
routerApp.use(postRoutes);

module.exports = routerApp;