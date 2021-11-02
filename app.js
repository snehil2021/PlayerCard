var exp=require('express');
var file=require('fs')

var app=exp();
app.use(exp.urlencoded())
// pug
app.set('views', './views')
app.set('view engine', 'pug')

// pug end
// app.get('/', function (req, res) {
//     res.render('index.pug')
//   })
app.get('/', (req, res)=> {
    
    res.render('index.pug')
  })

app.get('/test',(req,res)=>{
    res.send('This is get req')
})
app.post('/',(req,res)=>{
    
    var Mplayer=req.body
    var playerInfo=Mplayer.name+" "+Mplayer.age+" "+Mplayer.about
    // file.appendFileSync('output.txt',playerInfo) .....use this method to return the player data in a text file
    
    // var PlayerName=Mplayer.name
    // var PlayerAge=Mplayer.age
    // var PlayerAbout=Mplayer.about
    if(Mplayer.about.length<=402 && Mplayer.name.length<=30 && Mplayer.age.length<=4){
    
    res.render('player.pug',{ 'PlayerName':Mplayer.name,
        'PlayerAge':Mplayer.age,
        'PlayerAbout':Mplayer.about})}
    else{
        res.render('error.pug')
    }
})
app.listen(80,()=>{
    console.log('server is started')
})