let express = require('express');
let app = express();

app.get('/cart', (req, res) => {
    res.send('Hola, estamos en ');
});

app.listen(3005,()=>console.log('Server up to port 300'));