const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');


let titles =[];
let descripts =[];

app.get('/', (req,res)=>{
    res.render('homepage', {titles: titles , descripts: descripts});
});

app.get('/appItems', (req,res)=>{
    res.render('addItems');
});


app.post('/', (req,res)=>{
    let title = req.body.title;
    let descript = req.body.descript;

    titles.push(title);
    descripts.push(descript);
    res.redirect('/');
})

app.get('/about', (req,res)=>{
    res.render('about');
});
app.get('/contact', (req,res)=>{
    res.render('contact');
});
app.post('/contact', (req,res)=>{
    const email = req.body.email;
    const textarea = req.body.context;
    console.log(`${email} and ${textarea}`);

})



app.listen(port, ()=>{
    console.log('server is running...');
});


