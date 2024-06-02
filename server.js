const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const Handlebars = require('handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection');


const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'This is our secret',
  cookie: {
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict'
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({
  helpers: {
    json: function (value) {
      return JSON.stringify(value, null, 2);
    }
  }
});

Handlebars.registerHelper('randomPrompt', async () => {
  return await getRandomPrompt();
});

Handlebars.registerHelper('randomGenre', async () => {
  return await getRandomGenre();
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//added this to make sure custom css runs
app.get('/public/css/custom.css', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'css', 'custom.css');
  res.sendFile(filePath);
});

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

