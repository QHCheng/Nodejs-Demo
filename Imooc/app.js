var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

app.set('views', './views/pages');
app.set('view engine', 'jade');
app.listen(port);

console.log('Imooc started on port !' + port);

// index page
app.get('/',function(req,res) {
    res.render('index', {title: 'Immoc 首页'});
});

// admin page
app.get('/admin/movie',function(req,res) {
    res.render('admin', {title: 'Immoc 后台录入页'});
});

// list page
app.get('/admin/list',function(req,res) {
    res.render('list', {title: 'Immoc 列表页'});
});

// detail page
app.get('/movie/:id',function(req,res) {
    res.render('detail', {title: 'Immoc 详情页'});
});
