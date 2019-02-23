var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var nodemailer = require('nodemailer');
var Review = require('../models/reviews.js');


router.get('/', function(req, res, next) {
  Review.find({},(err,data) => {
    res.render('index', { title: 'Cappadocia Airways | Hot Air Balloons Cappadocia', data: data });
  })
});
router.get('/faq', function(req, res, next) {
  res.render('faq', { title: 'FAQ | Cappadocia Airways' });
});
router.get('/booking', function(req, res, next) {
  res.render('booking', { title: 'BOOKING | Cappadocia Airways' });
});
router.get('/gallery', function(req, res, next) {
  res.render('gallery', { title: 'GALLERY | Cappadocia Airways' });
});
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'SERVICES | Cappadocia Airways' });
});
router.get('/prices', function(req, res, next) {
  res.render('prices', { title: 'PRICES | Cappadocia Airways' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'ABOUT | Cappadocia Airways' });
});




/* ============= POSTS ============= */
router.post('/reviews', function(req, res, next) {
    var review = new Review();
    review.nickname = req.body.nickname;
    review.experience = req.body.experience;
    review.save(function(err) {
        if (err) throw err
        res.redirect('/');
    })
})

router.post('/message' , function(req, res, next) {
  const transporter = nodemailer.createTransport({
    direct:true,
      host: 'smtp.yandex.com',
      port: 465,
      auth: {
          user: 'cappadocia-airways@yandex.com.tr',
          pass: '2782765td' },
      secure: true
  })
  const mailOptions = {
      from: `"YENİ REZERVASYON" <cappadocia-airways@yandex.com.tr>`,
      to: 'contact@hotair-balloons.com',
    subject: 'New Message! | '+req.body.tour,
    html: 'Kimden: '+req.body.mail+'<br>İsim: '+req.body.name+'<br>Telefon:'+req.body.mobile+'<br>Hotel:'+req.body.hotel+'<br>Tarih:'+req.body.date+'<br>Ülke:'+req.body.country+'<br>Tur:'+req.body.tour+'<br>Yetişkin sayısı:'+req.body.number+'<br><hr>details:'+req.body.details
  };
  transporter.sendMail(mailOptions, function (err, info) {
     if(err)
       console.log(err)
     else
       console.log(info);
       Review.find({},(err,data) => {
        res.render('index', { title: 'Cappadocia Airways | Hot Air Balloons Cappadocia', data: data });
      })
});
})
module.exports = router;
