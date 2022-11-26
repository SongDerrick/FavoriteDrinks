var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const mongoose = require('mongoose');
var app = express();

const dataarray = [
  {
    _id: 0,
    name: "데자와",
    link: "https://cdn.imweb.me/thumbnail/20201201/2a7eb5b04812d.jpg",
    likes: 0
  },
  {
    _id: 1,
    name: "솔의 눈",
    link: "https://img.danawa.com/prod_img/500000/945/970/img/1970945_1.jpg?shrink=330:330&_v=20211110135448",
    likes: 0
  },
  {
    _id: 2,
    name: "베지밀",
    link: "https://red.lotteon.com/_m2_/_rsc_/LF1006430/?sref=http://image.lottesuper.co.kr/static-root/fileupload/images/8801033000126_S%20(2).jpg",
    likes: 0
  },
  {
    _id: 3,
    name: "두유 검은 콩",
    link: "https://img.danawa.com/prod_img/500000/438/587/img/1587438_1.jpg?shrink=330:330&_v=20200708133720",
    likes: 0
  },
  {
    _id: 4,
    name: "레드불",
    link: "https://openimage.interpark.com/goods_image_big/2/3/7/5/6549172375_l.jpg",
    likes: 0
  },
  {
    _id: 5,
    name: "몬스터 에너지",
    link: "https://img.danawa.com/prod_img/500000/860/779/img/3779860_1.jpg?shrink=330:330&_v=20220303102552",
    likes: 0
  },
  {
    _id: 6,
    name: "몬스터 울트라",
    link: "https://josundal.com/web/product/big/20200226/9ecfa2c266554d0167a67bd59407d5c2.jpg",
    likes: 0
  },
  {
    _id: 7,
    name: "핫 식스",
    link: "https://img.danawa.com/prod_img/500000/231/686/img/1686231_1.jpg?shrink=330:330&_v=20220902124631",
    likes: 0
  },
  {
    _id: 8,
    name: "바나나 우유",
    link: "https://img.danawa.com/prod_img/500000/518/532/img/9532518_1.jpg?shrink=330:330&_v=20190920150153",
    likes: 0
  },
  {
    _id: 9,
    name: "초코에몽",
    link: "https://img.danawa.com/prod_img/500000/381/608/img/5608381_1.jpg?shrink=330:330&_v=20220617104541",
    likes: 0
  },
  {
    _id: 10,
    name: "맥콜",
    link: "https://img.danawa.com/prod_img/500000/812/904/img/904812_1.jpg?shrink=330:330&_v=20170810085548",
    likes: 0
  },
  {
    _id: 11,
    name: "지코",
    link: "https://img.danawa.com/prod_img/500000/329/182/img/3182329_1.jpg?shrink=330:330&_v=20180427160550",
    likes: 0
  }
];

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Drink.insertMany(dataarray, function(err){
//   if( err ){
//     console.log(err);
//   }
//   else{
//     console.log("Successfully updated!");
//   }
// })

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
