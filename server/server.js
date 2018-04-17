const express = require('express');

const app = express();
const PORT = 5000; // all caps bc it'll never change
// the port is which entryway on our computer we're going to use
// there are thousands, so just pick one
// if you try one and get red text pick a different one
// there are like 9000 of them
// 1-1024 are in use, so don't use them

// req is request, res is response
// app.get('/', function (req, res) {
//     res.send('Hello, world!');
// });

// use is like get, but works for everything, including get
// here we're using express as an object with a method
app.use(express.static('server/public'));

app.get('/hey', function (req, res) {
    res.send('Howdy!');
});

app.listen(PORT, function () {
    console.log(`listening on port ${PORT}`);
}); // this makes it so people who start up our app can see what port it's on
// and don't have to guess 1000 ports before they get to the right one
// now that we're using a server, go to localhost:5000
// or whatever port we used