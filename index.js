const express = require('express') ;
const app = express() ;

// const PORT = process.env.port || 4000 ;
const PORT = 4000 ;

// use express router
app.use('/', require('./routes')) ;

// set up the view engine
app.set('view engine', 'ejs') ;
app.set('views', './views') ;

app.listen(PORT, (err)=>{
    if(err){
        console.log(`Error in running the server: ${err}`) ;
        return ;
    }
    console.log(`Server is running on port ${PORT}`);
})
