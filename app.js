const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');


const app = express();
app.set("view engine", 'ejs');
app.use(express.static('public'));
//Database server connction
mongoose.connect("mongodb+srv://admin-abhyoday:todo1234@cluster0.p9i0d.mongodb.net/fakeDB");
const Schema = mongoose.Schema;
//State data collection.

const AP = mongoose.model('APData',
    new Schema({ StateName: String, DISTNAME: String, LiteracyRate: Number, SchoolEnrollmentRatio: Number, CollegeEnrollmentRatio: Number, SchoolDropoutRatio: Number, CollegeDropoutRatio: Number }),
    'APData');
const Assam = mongoose.model('ASData',
    new Schema({ StateName: String, DISTNAME: String, LiteracyRate: Number, SchoolEnrollmentRatio: Number, CollegeEnrollmentRatio: Number, SchoolDropoutRatio: Number, CollegeDropoutRatio: Number }),
    'AssamData');
const Bihar = mongoose.model('BiharData',
    new Schema({ StateName: String, DISTNAME: String, LiteracyRate: Number, SchoolEnrollmentRatio: Number, CollegeEnrollmentRatio: Number, SchoolDropoutRatio: Number, CollegeDropoutRatio: Number }),
    'BiharData');

const Goa = mongoose.model('GoaData',
    new Schema({ StateName: String, DISTNAME: String, LiteracyRate: Number, SchoolEnrollmentRatio: Number, CollegeEnrollmentRatio: Number, SchoolDropoutRatio: Number, CollegeDropoutRatio: Number }),
    'GoaData');

const Chhatisgarh = mongoose.model('ChhatisgarhData',
    new Schema({ StateName: String, DISTNAME: String, LiteracyRate: Number, SchoolEnrollmentRatio: Number, CollegeEnrollmentRatio: Number, SchoolDropoutRatio: Number, CollegeDropoutRatio: Number }),
    'ChhatisgarhData');

    const Gujarat = mongoose.model('GujaratData',
    new Schema({ StateName: String, DISTNAME: String, LiteracyRate: Number, SchoolEnrollmentRatio: Number, CollegeEnrollmentRatio: Number, SchoolDropoutRatio: Number, CollegeDropoutRatio: Number }),
    'GujaratData');

    const Himachal = mongoose.model('HimachalData',
    new Schema({ StateName: String, DISTNAME: String, LiteracyRate: Number, SchoolEnrollmentRatio: Number, CollegeEnrollmentRatio: Number, SchoolDropoutRatio: Number, CollegeDropoutRatio: Number }),
    'HimachalData');

app.get('/', function (req, res) {
    res.render('home');
})

app.get('/state/:state', function (req, res) {
    const state = req.params.state;
    switch (state) {
        case 'AP':
            AP.find({}, function (err, result) {
                if (!err) {
                    res.render('cityData', { 'state': result[0].StateName, 'distData': result });
                }
            });
            break;
        case 'Assam':
            Assam.find({}, function (err, result) {
                if (!err) {
                    res.render('cityData', { 'state': 'ASSAM', 'distData': result });
                }
            });
            break;
        case 'Bihar':
            Bihar.find({}, function (err, result) {
                if (!err) {
                    res.render('cityData', { 'state': 'BIHAR', 'distData': result });
                }
            });
            break;
        case 'Goa':
            Goa.find({}, function (err, result) {
                if (!err) {
                    res.render('cityData', { 'state': 'GOA', 'distData': result });
                }
            });
            break;
        case 'Chhattisgarh':
            Chhatisgarh.find({}, function (err, result) {
                if (!err) {
                    res.render('cityData', { 'state': 'CHHATTISGARH', 'distData': result });
                }
            });
            break;
        case 'Gujarat':
            Gujarat.find({}, function (err, result) {
                if (!err) {
                    res.render('cityData', { 'state': 'GUJARAT' , 'distData': result });
                }
            });
            break; 
            case 'Himachal':
                Himachal.find({}, function (err, result) {
                    if (!err) {
                        res.render('cityData', { 'state':'HIMACHAL PRADESH', 'distData': result });
                    }
                });
                break; 
    }
})


app.listen(3000, function () {
    console.log('Server started at port 3000');
})