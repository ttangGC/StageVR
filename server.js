var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var Redis = require('ioredis');
var redis = new Redis();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

redis.set('poscamx', 0);
redis.set('poscamy', 0);
redis.set('poscamz', 0);
redis.set('rotcamx', 0);
redis.set('rotcamy', 0);
redis.set('rotcamz', 0);
redis.set('pointerposx', 0);
redis.set('pointerposy', 0);
redis.set('pointerposz', 0);
redis.set('ispointeron', false);

app.get('/demo/poscamx', function(req, res) { redis.get('poscamx', function(err, result) { res.json({ value: JSON.parse(result) }); }); });
app.post('/demo/poscamx', function(req, res) { redis.set('poscamx', req.body.value, function(err, result) { res.json(true); }); });

app.get('/demo/poscamy', function(req, res) { redis.get('poscamy', function(err, result) { res.json({ value: JSON.parse(result) }); }); });
app.post('/demo/poscamy', function(req, res) { redis.set('poscamy', req.body.value, function(err, result) { res.json(true); }); });

app.get('/demo/poscamz', function(req, res) { redis.get('poscamz', function(err, result) { res.json({ value: JSON.parse(result) }); }); });
app.post('/demo/poscamz', function(req, res) { redis.set('poscamz', req.body.value, function(err, result) { res.json(true); }); });

app.get('/demo/rotcamx', function(req, res) { redis.get('rotcamx', function(err, result) { res.json({ value: JSON.parse(result) }); }); });
app.post('/demo/rotcamx', function(req, res) { redis.set('rotcamx', req.body.value, function(err, result) { res.json(true); }); });

app.get('/demo/rotcamy', function(req, res) { redis.get('rotcamy', function(err, result) { res.json({ value: JSON.parse(result) }); }); });
app.post('/demo/rotcamy', function(req, res) { redis.set('rotcamy', req.body.value, function(err, result) { res.json(true); }); });

app.get('/demo/rotcamz', function(req, res) { redis.get('rotcamz', function(err, result) { res.json({ value: JSON.parse(result) }); }); });
app.post('/demo/rotcamz', function(req, res) { redis.set('rotcamz', req.body.value, function(err, result) { res.json(true); }); });

app.get('/demo/pointerposx', function(req, res) { redis.get('pointerposx', function(err, result) { res.json({ value: JSON.parse(result) }); }); });
app.post('/demo/pointerposx', function(req, res) { redis.set('pointerposx', req.body.value, function(err, result) { res.json(true); }); });

app.get('/demo/pointerposy', function(req, res) { redis.get('pointerposy', function(err, result) { res.json({ value: JSON.parse(result) }); }); });
app.post('/demo/pointerposy', function(req, res) { redis.set('pointerposy', req.body.value, function(err, result) { res.json(true); }); });

app.get('/demo/pointerposz', function(req, res) { redis.get('pointerposz', function(err, result) { res.json({ value: JSON.parse(result) }); }); });
app.post('/demo/pointerposz', function(req, res) { redis.set('pointerposz', req.body.value, function(err, result) { res.json(true); }); });

app.get('/demo/ispointeron', function(req, res) { redis.get('ispointeron', function(err, result) { res.json({ value: JSON.parse(result) }); }); });
app.post('/demo/ispointeron', function(req, res) { redis.set('ispointeron', req.body.value, function(err, result) { res.json(true); }); });

app.listen(8080);
