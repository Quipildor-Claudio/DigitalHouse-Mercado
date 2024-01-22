let express = require('express');
let app = express();
let path = require('node:path');

app.get('/', (req, res) => {
    res.sendFile(path.join( __dirname,'/views/home.html'));
});
app.use(express.static('public'))
app.listen(3005,()=>console.log('Server up to http://localhost:3005 '));