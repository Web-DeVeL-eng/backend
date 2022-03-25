console.log('Hello World')
const express = require('express');
const  path  = require('path');

const app = express();
port= 80;

app.use('/static',express.static('stop'));

app.set('view engine', 'pug')

app.set('views', path.join(__dirname,'view'))

app.get('/demo',(req,res)=>{
    res.status(200).render('demo', { title: 'Pug User', message: 'Hello there! Please Subscribe To My Channel #Perfect1.O' })
});

app.get('/',(req,res)=>{
    res.send('I am Developing First Web On Express')
});

app.get('/about',(req,res)=>{
    res.send('This Is The About Page On Express Developed by Hafeez')
});

app.post('/contact',(req,res)=>{
    res.send('This is First Post on Contact page using express by Hafeez');
});

app.get('/ser',(req,res)=>{
    res.send('This is First Put on ser page using express by Hafeez');
})

app.listen(port,()=>{
    console.log(`Hafeez is Listening Your Requests on port ${port}`)
})