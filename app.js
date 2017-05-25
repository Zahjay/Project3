const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const Yelp = require('node-yelp-api-v3');
require('dotenv').config();

const PORT = process.env.PORT || 3001;
app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});

app.use('/static', express.static(path.join(__dirname, 'public')));

app.use(cors());

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/',function(req,res){
  res.sendFile(__dirname + '/public/index.html');
});

// calling yelp data
const yelp = new Yelp({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
});
const boroughData= [];

function searchLocations(borough, categories) {
	yelp.searchBusiness({ 
		location: borough,
		sort_by: 'rating',
		price: '1', 
		categories: categories,
	})
		.then((yelpData) => {
			boroughData.push(yelpData);
			console.log(boroughData);
		})
}

searchLocations('brooklyn', 'restaurants');

// yelp.getBusinessById('gary-danko-san-francisco').then((result) => console.log(result));

const locationRoutes = require('./routes/locationRoutes');

app.use('/api/location', locationRoutes);
app.use('/api/location/reviews', locationRoutes)

app.get('*',function(req,res){
  res.status(404).send({message: 'Opps! Not found.'})
})