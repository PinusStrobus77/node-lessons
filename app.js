const express = require('express');
const morgan = require('morgan')

const app = express();

app.set('view engine', 'ejs');

app.listen(3000);

app.use(morgan('dev'))
app.use(express.static('public'))

const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];

//   app.use((req,res, next) =>{
//     console.log('new request made');
//     console.log('host', req.hostname);
//     console.log('path', req.path);
//     console.log('method',req.method);
//     next();
// } )

// app.use((req, res, next) => {
//     console.log('in the next middleware');
//      next();
//    });

app.get('/', (req, res) => {
    res.render('index', {title:'Home', blogs});
})

app.get('/about', (req, res) => {
    res.render('about', {title:'about'})
})

app.get('/create', (req, res) => {
    res.render('create', {title:'Create a new blog'})
})

app.use((req, res) =>{
    res.status(404).render('404', {title:'404'})
})

