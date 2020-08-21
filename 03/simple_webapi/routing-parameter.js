const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

//IT students
const itStudents =[
    {id:61,name:'jack'},
    {id:62,name:'bell'}
];
//CE students
const ceStudents =[
    {id:71,name:'wattana'},
    {id:72,name:'jame'}
];
//major
const allMajors ={
    'it':itStudents,
    'ce':ceStudents
};
//route1
app.get('/api/:major',(req,res,next)=>{
    const major = req.params.major.toLowerCase();
    if(major=='it'){
        const jsonString = JSON.stringify(itStudents);
        req.myobj=jsonString;
        next();
    }else if(major =='ce'){
        const jsonString = JSON.stringify(ceStudents);
        req.myobj=jsonString;
        next();
    }else{
        res.send('Major not found!!!');
    }
},(req,res)=>{
    req.myobj += 'End of Data';
    res.send(req.myobj);
});
app.listen(port,'127.0.0.1',()=>{
    console.log(`Listening on port ${port}`);

});
