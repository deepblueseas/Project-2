// I rearranged a little bit when I was going through some CWRU examples 
// just to make sure nothing was missing
// I dont think the arrangement for consts matters it was just for my visualization

const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars'); //why is this not yellow?
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');


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

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


// added this to make sure custom css runs, kept bumping into a strict MIME issue early on
app.get('/public/css/custom.css', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'css', 'custom.css');
  res.sendFile(filePath);
});

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

