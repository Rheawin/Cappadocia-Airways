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
          pass: 'asdas111' },
      secure: true
  })
  const mailOptions = {
      from: `"YENİ REZERVASYON" <cappadocia-airways@yandex.com.tr>`,
      to: 'cappadocia-airways@yandex.com.tr',
    subject: 'New Message! | '+req.body.tour,
    html: 'from: '+req.body.mail+'<br>Name: '+req.body.name+'<br>Telephone:'+req.body.mobile+'<br>Hotel:'+req.body.hotel+'<br>Date:'+req.body.date+'<br>Country:'+req.body.country+'<br>Tour:'+req.body.tour+'<br>Adults:'+req.body.adult+'<br>Children:'+req.body.children+'<hr>details:'+req.body.details
  };
  transporter.sendMail(mailOptions, function (err, info) {
     if(err)
       console.log(err)
     else
       console.log(info);
       res.render('index', { title: 'Cappadocia Airways | Hot Air Balloons Cappadocia' });
  });
})
module.exports = router;
