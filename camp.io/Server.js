const express = require('express');//must run npm install express
const bodyParser= require('body-parser');
const MongoClient = require('mongodb').MongoClient
const app = express();
const connectionString ='mongodb+srv://admin:admin@cluster0.lngosi3.mongodb.net/?retryWrites=true&w=majority'

app.use(bodyParser.urlencoded({ extended: true}))
        // app.use(express.static('public'))
        app.use(express.json())

MongoClient.connect(connectionString, { useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to database!!!')
        const db = client.db('campsite-reviews')
        const campsiteReviews = db.collection('reviews')
        app.set('view engine', 'ejs')
        app.use(bodyParser.urlencoded({ extended: true}))
        app.get('/', (req,res) => {
            console.log("no issue here")
            // console.log("dirname " + __dirname)
            //dirname C:\Users\jenp2\camp.io\camp.io\camp.io
            res.sendFile(__dirname + '/src/app/tab2')
        })

        // console.log("req " + req.body)
        // console.log("res " + res)
        app.post('/reviews', (req, res) => {
            console.log("made it to reviews")
            campsiteReviews.insertOne(req)
            .then(result => {
                console.log(result)
            })
            .catch(error => console.error(error))
        })

        app.listen(3000, function() {
            console.log('listening on 3000')
        })

    })
    .catch(console.error)
