const express = require('express');//must run npm install express
const bodyParser= require('body-parser');
const MongoClient = require('mongodb').MongoClient
const app = express();

const connectionString ='mongodb+srv://admin:admin@cluster0.lngosi3.mongodb.net/?retryWrites=true&w=majority'

MongoClient.connect(connectionString, { useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to database!!!')
        const db = client.db('campsite-reviews')
        const campsiteReviews = db.collection('reviews')

        app.set('view engine', 'ejs')
        app.listen(bodyParser.urlencoded({ extended: true}))
        // app.use(bodyParser.json())
        app.use(bodyParser.urlencoded({ extended: true}))
        // app.use(express.static('public'))
        app.use(express.json())

        // console.log("dirname " + __dirname)
        console.log("make it to line 19")
        
        app.get('/', (req,res) => {
            console.log("no isse here")
            // console.log("dirname " + __dirname)
            //dirname C:\Users\jenp2\camp.io\camp.io\camp.io
            res.sendFile(__dirname + '/tabs/tab2')
        })

        // console.log("req " + req.body)
        // console.log("res " + res)
        app.post('/api/reviews', (req, res) => {
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
