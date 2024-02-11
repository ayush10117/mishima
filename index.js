import express from 'express';


const app = express();
const port= 3000;
app.use(express.static('public'));

app.get('/', (req,res)=>{
    res.sendFile(process.cwd()+"/public/home.html");
});

app.post('/submit',(req,res)=>{
    res.sendFile(process.cwd()+"/public/adminpage.html");
});

app.post('/user-sybmit',(req,res)=>{
    res.sendFile(process.cwd()+"/public/userpage.html");
});

app.listen(port, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", port);
});



